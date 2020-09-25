/**
 * Created by 208439 on 2020/9/24
 *
 * Author: wind
 *
 * Content:触摸view
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, PanResponder, Animated, ViewPropTypes} from 'react-native';
import {dimens} from "../../../base/resource";

const ViewType = {
    normal: {
        vLineX: dimens.screenWidth / 2, // 窗帘最初开始x坐标点
        initCurtainTrackWidth: dimens.screenWidth / 2, // 窗帘轨道宽
    },
    left: {
        vLineX: 0,
        initCurtainTrackWidth: dimens.screenWidth,
    },
    right: {
        vLineX: dimens.screenWidth,
        initCurtainTrackWidth: dimens.screenWidth,
    }
};

class GnTouchView extends Component {
    constructor(props) {
        super(props);
        const {type, curtainOpenScale} = this.props;
        this.vLineX = ViewType[type].vLineX;
        this.initCurtainTrackWidth = ViewType[type].initCurtainTrackWidth;
        this.curtainWidth = this.initCurtainTrackWidth * (1 - curtainOpenScale);
        this.sclan = 1 - curtainOpenScale;
        this.moveCurtainWidth = this.curtainWidth;
        this.state = {
            pan: new Animated.ValueXY({x: this.curtainWidth, y: 0})
        };
    }

    UNSAFE_componentWillMount() {
        const {rouchEndEvent} = this.props;
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                // gestureState.{x,y} 现在会被设置为0
            },
            onPanResponderMove: (evt, gestureState) => {
                // 最近一次的移动距离为gestureState.move{X,Y}

                // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
                if (gestureState.moveX == 0 && gestureState.moveY == 0) return;
                this.moveEvent(gestureState.x0, gestureState.dx);

            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
                if (gestureState.moveX == 0 && gestureState.moveY == 0) return;
                rouchEndEvent(this.sclan);
                this.curtainWidth = this.moveCurtainWidth;
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            },
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps,nextContext){
        const {type, curtainOpenScale} = nextProps;
        this.vLineX = ViewType[type].vLineX;
        this.initCurtainTrackWidth = ViewType[type].initCurtainTrackWidth;
        this.curtainWidth = this.initCurtainTrackWidth * (1 - curtainOpenScale);
        this.sclan = 1 - curtainOpenScale;
        this.moveCurtainWidth = this.curtainWidth;
        this.setState({
            pan: new Animated.ValueXY({x: this.curtainWidth, y: 0})
        });
    }


    // 手指移动事件
    moveEvent = (initX, dx) => {
        if (initX < this.vLineX && dx > 0) { // 关
            this.openORoffEvent(false, Math.abs(dx));
        } else if (initX < this.vLineX && dx < 0) { // 开
            this.openORoffEvent(true, Math.abs(dx));
        } else if (initX > this.vLineX && dx < 0) { // 关
            this.openORoffEvent(false, Math.abs(dx));
        } else if (initX > this.vLineX && dx > 0) { // 开
            this.openORoffEvent(true, Math.abs(dx));
        }
    };


    openORoffEvent = (tag, distance) => {
        const {moveEvent, enlargeNumber, minGap} = this.props;
        this.moveCurtainWidth = this.curtainWidth;
        let rel;
        if (tag) {
            rel = this.moveCurtainWidth - (enlargeNumber * distance / (dimens.screenWidth)) * this.initCurtainTrackWidth;
        } else {
            rel = this.moveCurtainWidth + (enlargeNumber * distance / (dimens.screenWidth)) * this.initCurtainTrackWidth;
            if (rel > this.initCurtainTrackWidth) {
                rel = this.initCurtainTrackWidth;
            }
        }

        this.sclan = (this.initCurtainTrackWidth - (rel < 0 ? 0 : rel)) / this.initCurtainTrackWidth;
        this.moveCurtainWidth = rel < minGap ? minGap : rel;

        moveEvent(this.sclan);
        this.state.pan.setValue({x: this.moveCurtainWidth, y: 0})
    };


    render() {
        console.log("CurtainPage GnTouchView is Refresh");
        const {type, viewStyle, leftChildren, rightChildren} = this.props;
        return (
            <View
                style={[styles.container, type == "left" ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}, viewStyle]} {...this._panResponder.panHandlers}>
                <Animated.View style={{
                    width: this.state.pan.x,
                    height: '100%',
                    flexDirection: 'row'
                }}>
                    {leftChildren}
                </Animated.View>
                {type == "left" || type == "right" ? null : <Animated.View style={{
                    width: this.state.pan.x,
                    height: '100%',
                    flexDirection: 'row'
                }}>
                    {rightChildren}
                </Animated.View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

GnTouchView.propTypes = {
    viewStyle: ViewPropTypes.style,
    type: PropTypes.string,
    // 左边元素
    leftChildren: PropTypes.element,
    // 右边元素
    rightChildren: PropTypes.element,
    // 移动事件
    moveEvent: PropTypes.func,
    // 手指抬起事件
    rouchEndEvent: PropTypes.func,
    // 移动距离放大
    enlargeNumber: PropTypes.number,
    // 两边预留多少间隙
    minGap: PropTypes.number,
    // 窗帘初始打开比例
    curtainOpenScale: PropTypes.number,
};

const defaultProps = {
    type: "normal",
    enlargeNumber: 4,
    minGap: dimens.scale(20),
    curtainOpenScale: 0
};
GnTouchView.defaultProps = defaultProps;

export default GnTouchView;