/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:app 入口文件
 */

import React from "react";
import {Provider} from "mobx-react";
import Root from "./root";
import store from "./base/store/index";

export default class App extends React.Component {
    render() {
        return (
            <Provider {...store}>
                <Root/>
            </Provider>
        );
    }
}