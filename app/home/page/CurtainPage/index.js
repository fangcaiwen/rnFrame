/**
 * Created by 208439 on 2020/9/22
 *
 * Author: wind
 *
 * Content:
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {inject, observer} from "mobx-react";
import {GnTouchView, GnTouchViewText, LoadingView, BigButton} from "../../../base/widgets/index";
import LinearGradient from "react-native-linear-gradient";

@inject("home") // 注入对应的store
@observer
export default class CurtainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {CurtainStore} = this.props.home;
        CurtainStore.initData();

        // this.lefttime = setInterval(() => {
        //     // CurtainStore.setCurtainOpenScale(0.2);
        // }, 10000);
        //
        // setInterval(function () {
        //     clearInterval(this.lefttime);
        //     CurtainStore.setCurtainTypeAndOpenScale(0.5);
        // }, 18000);
    }


    componentWillUnmount() {
        const {CurtainStore} = this.props.home;
        CurtainStore.clearData();
    }

    // 窗帘移动事件
    curtainMoveEvent = (value) => {
        const {CurtainStore} = this.props.home;
        this.mGnTouchViewText.changeTitle(value);
        CurtainStore.closeAllTimeListen();
    };

    // 窗帘移动结束事件
    curtainMoveEndEvent = (value) => {
        const {CurtainStore} = this.props.home;
        CurtainStore.setCurtainOpenScale(value);
        console.log("CurtainPage is ===== endTouch", value);
    };

    // 暂停指令
    stopCurtainIndiction = () => {
        const {CurtainStore} = this.props.home;
        CurtainStore.closeAllTimeListen();
        console.log("CurtainPage is ===== Stop", CurtainStore.curtainOpenScale);
    };

    // 打开指令
    startCurtainIndiction = () => {
        const {CurtainStore} = this.props.home;
        CurtainStore.openAllCurtain();
        console.log("CurtainPage is ===== Opening", CurtainStore.curtainOpenScale);
    };

    // 关闭指令
    closeCurtainIndiction = () => {
        const {CurtainStore} = this.props.home;
        CurtainStore.closeAllCurtain();
        console.log("CurtainPage is Closeing ", CurtainStore.curtainOpenScale);
    };


    render() {
        console.log("CurtainPage is Refresh");
        const {CurtainStore} = this.props.home;
        if (CurtainStore.isLoading) {
            return <LoadingView/>;
        }
        return (
            <View style={styles.container}>
                <GnTouchView
                    type={CurtainStore.type}
                    viewStyle={{backgroundColor: '#167bd2'}}
                    curtainOpenScale={CurtainStore.curtainOpenScale}
                    leftChildren={<View style={{flex: 1, flexDirection: 'row'}}>
                        <LinearGradient colors={['#66a7df', '#94caf4', '#78caf8',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#5098d9', '#95caf0', '#7ac5f5',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#4590d8', '#85c0ee', '#72c5f5',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#3287d4', '#75b8ef', '#6dc3f4',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#2d87d5', '#63b1ef', '#65bef3',]} style={{flex: 1}}/>
                    </View>}
                    rightChildren={<View style={{flex: 1, flexDirection: 'row'}}>
                        <LinearGradient colors={['#2d87d5', '#63b1ef', '#65bef3',]} style={{flex: 1, margin: -1}}/>
                        <LinearGradient colors={['#3287d4', '#75b8ef', '#6dc3f4',]} style={{flex: 2, margin: -1}}/>
                        <LinearGradient colors={['#4590d8', '#85c0ee', '#72c5f5',]} style={{flex: 2, margin: -1}}/>
                        <LinearGradient colors={['#5098d9', '#95caf0', '#7ac5f5',]} style={{flex: 2, margin: -1}}/>
                        <LinearGradient colors={['#66a7df', '#94caf4', '#78caf8',]} style={{flex: 2, margin: -1}}/>
                    </View>}
                    moveEvent={(sclanCalue) => this.curtainMoveEvent(sclanCalue)}
                    rouchEndEvent={(value) => this.curtainMoveEndEvent(value)}
                />
                <GnTouchViewText viewStyle={{position: 'absolute', top: 60, alignSelf: 'center'}}
                                 title={CurtainStore.curtainOpenScale}
                                 ref={(view) => this.mGnTouchViewText = view}/>
                <BigButton viewStyle={{position: 'absolute', bottom: 30, alignSelf: 'center'}}
                           title={'开启'}
                           onPressEvent={() => this.startCurtainIndiction()}
                />

                <BigButton viewStyle={{position: 'absolute', bottom: 130, alignSelf: 'center'}}
                           title={'关闭'}
                           onPressEvent={() => this.closeCurtainIndiction()}
                />

                <BigButton viewStyle={{position: 'absolute', bottom: 230, alignSelf: 'center'}}
                           title={'暂停'}
                           onPressEvent={() => this.stopCurtainIndiction()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});