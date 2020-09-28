/**
 * Created by 208439 on 2020/9/24
 *
 * Author: wind
 *
 * Content:
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ViewPropTypes, Text, Image} from 'react-native';
import {colors, dimens, images} from "../../../base/resource";

class GnTouchViewText extends Component {
    constructor(props) {
        super(props);
        const {title} = this.props;
        this.state = {
            showTitle: title,
            isShow: true
        };
    }

    changeTitle = (value) => {
        this.setState({
            showTitle: value,
            isShow: true
        });
    };

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.changeTitle(nextProps.title);
    }

    // 展示箭头
    showRow = () => {
        const {showTitle, isShow} = this.state;
        if (!isShow) return null;
        if (showTitle >= 0.8) {
            return <View style={styles.bottomView}>
                <Image source={images.rowRight} style={styles.rowImageStyle}/>
                <Image source={images.rowLeft} style={styles.rowImageStyle}/>
            </View>
        }
        if (showTitle <= 0.2) {
            return <View style={[styles.bottomView, {justifyContent: 'center'}]}>
                <Image source={images.rowLeft} style={styles.rowImageStyle}/>
                <Image source={images.rowRight} style={styles.rowImageStyle}/>
            </View>
        }
        return null;
    };

    // 显示文字
    showRemark = () => {
        const {showTitle, isShow} = this.state;
        if (!isShow) return "";
        if (showTitle >= 0.8) {
            return "左右滑动关闭窗帘";
        }
        if (showTitle <= 0.2) {
            return "左右滑动打开窗帘";
        }
        return "";
    };

    // 是否显示
    isShowEvent = (tag) => {
        this.setState({
            isShow: tag
        });
    };


    render() {
        console.log("CurtainPage GnTouchViewText is Refresh");
        const {showTitle, isShow} = this.state;
        const {viewStyle} = this.props;
        return (
            <View style={[styles.container, viewStyle]}>
                <View style={styles.mcontainer}>
                    <Text style={styles.titleStyle}>{isShow ? `窗帘开至${(showTitle * 100).toFixed(0)}%` : ''}</Text>
                </View>
                {this.showRow()}
                <Text style={styles.remarkStyle}>{this.showRemark()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: dimens.scale(340),
        height: dimens.scale(200),
        alignItems: 'center',
    },
    mcontainer: {
        width: 160,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: dimens.scale(40),
        marginBottom: dimens.scale(40),
    },
    bottomView: {
        width: dimens.scale(340),
        height: dimens.scale(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowStyle: {
        width: dimens.scale(20),
        height: dimens.scale(20),
        backgroundColor: colors.red
    },
    titleStyle: {
        fontSize: dimens.superBigTitle,
        color: colors.white
    },
    remarkStyle: {
        fontSize: dimens.bigTitle,
        color: colors.white
    },
    rowImageStyle: {
        width: dimens.scale(60),
        height: dimens.scale(20),
        marginLeft: dimens.scale(2),
        marginRight: dimens.scale(2)

    }
});

GnTouchViewText.propTypes = {
    viewStyle: ViewPropTypes.style,
    title: PropTypes.number,
};

const defaultProps = {
    title: 0
};
GnTouchViewText.defaultProps = defaultProps;

export default GnTouchViewText;