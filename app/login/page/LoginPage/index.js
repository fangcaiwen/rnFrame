/**
 * Created by 208439 on 2020/9/16
 *
 * Author: wind
 *
 * Content:登陆页
 */
import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import {observer, inject} from 'mobx-react';
import BasePage from "../../../base/page/BasePage";
import {BigButton} from "../../../base/widgets/index";
import {RowInput} from "../../../base/widgets/index";
import {dimens} from "../../../base/resource/index";

@inject("login")
@observer
export default class LoginPage extends BasePage {

    constructor(props) {
        super(props);
    }

    navigationOptions() {
        return {
            hiddenBottomLine: false,
            title: "登录",
        };
    }

    componentWillUnmount() {
        const {LoginStore} = this.props.login;
        LoginStore.clearData();
    }

    // 更改账号
    changeAccount = (text) => {
        const {LoginStore} = this.props.login;
        LoginStore.setAccount(text);
    };

    // 输入密码
    changePwd = (pwd) => {
        const {LoginStore} = this.props.login;
        LoginStore.setPassword(pwd)
    };

    // 去登录
    loginEvent = () => {
        // const {LoginStore} = this.props.login;
        // LoginStore.goToLogin();
        this.props.navigation.navigate("Main");
    };

    renderContent() {
        const {LoginStore} = this.props.login;
        return (
            <View style={styles.container}>
                <RowInput
                    placeholder={'请输入账号'}
                    borderButtom={true}
                    defaulValue={LoginStore.mAccount}
                    onChangeEvent={(text) => this.changeAccount(text)}
                    style={{marginBottom: 10}}
                />
                <RowInput
                    placeholder={'请输入密码'}
                    isPwd={true}
                    defaulValue={LoginStore.password}
                    onChangeEvent={(text) => this.changePwd(text)}
                />
                <BigButton
                    title={"登录"}
                    viewStyle={{marginTop: dimens.scaleHeight(60)}}
                    onPressEvent={() => this.loginEvent()}
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


