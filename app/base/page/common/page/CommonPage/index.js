/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:通用页面一
 */

import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import BasePage from "../../../BasePage";


export default class CommonPage extends BasePage {

    constructor(props) {
        super(props);
    }

    navigationOptions(){
        return {
            hiddenBottomLine:false,
            title: "测试页面",
        };
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <Text>我是通用页面1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'yellow'
    },
});