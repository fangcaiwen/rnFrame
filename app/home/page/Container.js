/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:主页面
 */

import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import {observer, inject} from 'mobx-react';
import {BigButton} from "../../base/widgets/index";
import {dimens} from "../../base/resource/index";
import {SendNoticeUserInfo} from "../../base/service/notice";

@inject("home")
@observer
export default class HomeTabScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {HomeStore} = this.props.home;
        return (
            <View style={styles.container}>
                <Text>{HomeStore.num}</Text>

                <BigButton title="点击数字更改+"
                           viewStyle={{marginTop: dimens.scaleHeight(10)}}
                           onPressEvent={() => HomeStore.addNum()}/>

                <BigButton title="点击数字更改清空"
                           viewStyle={{marginTop: dimens.scaleHeight(60)}}
                           onPressEvent={() => HomeStore.clearData()}/>

                <BigButton title="跳转页面"
                           viewStyle={{marginTop: dimens.scaleHeight(60)}}
                           onPressEvent={() => this.props.navigation.navigate("HomeList")}/>

                <BigButton title="发送通知到我的"
                           viewStyle={{marginTop: dimens.scaleHeight(60)}}
                           onPressEvent={() => SendNoticeUserInfo(HomeStore.num)}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});