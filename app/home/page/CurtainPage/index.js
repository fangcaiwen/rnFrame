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
import {GnTouchView, GnTouchViewText} from "../../../base/widgets/index";
import LinearGradient from "react-native-linear-gradient";
import LoadingView from "../../../base/widgets/LoadingView";

@inject("home") // 注入对应的store
@observer
export default class CurtainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {CurtainStore} = this.props.home;
        CurtainStore.initData();
    }


    componentWillUnmount(){
        const {CurtainStore} = this.props.home;
        CurtainStore.clearData();
    }


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
                    leftChildren={<View style={{flex: 1, flexDirection: 'row'}}>
                        <LinearGradient colors={['#66a7df', '#94caf4', '#78caf8',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#5098d9', '#95caf0', '#7ac5f5',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#4590d8', '#85c0ee', '#72c5f5',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#3287d4', '#75b8ef', '#6dc3f4',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#2d87d5', '#63b1ef', '#65bef3',]} style={{flex: 1}}/>
                    </View>}
                    rightChildren={<View style={{flex: 1, flexDirection: 'row'}}>
                        <LinearGradient colors={['#2d87d5', '#63b1ef', '#65bef3',]} style={{flex: 1}}/>
                        <LinearGradient colors={['#3287d4', '#75b8ef', '#6dc3f4',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#4590d8', '#85c0ee', '#72c5f5',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#5098d9', '#95caf0', '#7ac5f5',]} style={{flex: 2}}/>
                        <LinearGradient colors={['#66a7df', '#94caf4', '#78caf8',]} style={{flex: 2}}/>
                    </View>}
                    moveEvent={(sclanCalue) => this.mGnTouchViewText.changeTitle(sclanCalue)}
                    rouchEndEvent={(value) => console.log("CurtainPage sendValue", value)}
                />
                <GnTouchViewText viewStyle={{position: 'absolute', top: 60, alignSelf: 'center'}} title={"0"}
                                 ref={(view) => this.mGnTouchViewText = view}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});