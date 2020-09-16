/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:根页
 */
import React, {Component} from 'react';
import Navigator from './base/navigator/index';
import {SafeAreaView} from "react-navigation";
import {colors} from "./base/resource/index";
import HttpHelper from "./base/service/http/HttpHelper";
import {BaseUrl} from "./base/config";
import {SystemUtil} from './base/util/index'


export default class App extends Component<{}> {

    componentDidMount() {
        // 初始化接口请求
        HttpHelper.init(BaseUrl, (rel) => {
            SystemUtil.jsConsoleLog("api请求root", rel);
        });
    }

    render() {
        return (
            <SafeAreaView forceInset={{top: 'never', bottom: 0}} style={{flex: 1, backgroundColor: colors.white}}>
                <Navigator/>
            </SafeAreaView>
        )
    }

}