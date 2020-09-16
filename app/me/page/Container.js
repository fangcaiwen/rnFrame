/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:我的主页面
 */

import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import {ListenUserInfo, SendNoticeUserInfo} from "../../base/service/notice";
import {inject, observer} from "mobx-react";
import {dimens} from "../../base/resource";
import {BigButton} from "../../base/widgets/index";
import {getLoginInfo, setLoginInfo} from "../../base/service/cache";
import LoginPage from "./LoginPage";

@inject("me")
@observer
export default class MeTabScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {MeStore} = this.props.me;
        ListenUserInfo((value) => {
            MeStore.setData(value);
        });
    }

    // 读取本地缓存
    getUserFromLocal = () => {
        getLoginInfo().then((value) => {
            alert(JSON.stringify(value))
        });
    };

    render() {
        const {MeStore} = this.props.me;
        return (
            <View style={styles.container}>
                <Text>收到了通知：{MeStore.mData}</Text>
                <BigButton title="设置本地缓存"
                           viewStyle={{marginTop: dimens.scaleHeight(60)}}
                           onPressEvent={() => setLoginInfo({name: `wind${Math.random()}`})}/>
                <BigButton title="读取本地缓存"
                           viewStyle={{marginTop: dimens.scaleHeight(60)}}
                           onPressEvent={() => this.getUserFromLocal()}/>
                <BigButton title="去登录"
                           viewStyle={{marginTop: dimens.scaleHeight(60)}}
                           onPressEvent={() => this.props.navigation.navigate("LoginPage")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});