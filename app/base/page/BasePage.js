/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:页面基类
 */

import React from 'react';
import {NavigationActions, SafeAreaView} from 'react-navigation';
import {NavigationBar} from '../widgets/index';
import {colors} from '../resource/index';

export default class BasePage extends React.Component<Props> {

    navigationOptions() {
        return null;
    }

    constructor(props) {
        super(props);
        this.navigationOptions = this.navigationOptions.bind(this);
        this.onLeftPress = this.onLeftPress.bind(this);
        this.onRightPress = this.onRightPress.bind(this);
        this.onTitlePress = this.onTitlePress.bind(this);
        this.navigation = this.props.navigation;
        this.onCustomizeView = this.onCustomizeView.bind(this);
        this.getInitProps = this.getInitProps.bind(this);
    }

    canBack() {
        return true;
    }

    // 自定义属性可扩展
    getInitProps() {
        return null;
    }

    /**
     * 返回
     */
    goBack() {
        if (this.canBack()) {
            this.navigation.dispatch(NavigationActions.back());
        }
    }

    renderNavigationBar() {
        const {...others} = this.navigationOptions();
        return (
            <NavigationBar {...others}
                           onLeftPress={this.onLeftPress}
                           onRightPress={this.onRightPress}
                           onTitlePress={this.onTitlePress}/>
        );
    }

    onLeftPress() {
        this.goBack();
    }

    onRightPress() {
    }

    onTitlePress() {
        return false;
    }

    onCustomizeView() {
        return null;
    }

    renderContent() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        let initProps = this.getInitProps();
        return (
            <SafeAreaView
                forceInset={{top: 'never', bottom: 0}}
                style={{flex: 1, backgroundColor: initProps && initProps.backgroundColor || colors.pageBg}}>
                {this.renderNavigationBar()}
                {this.renderContent()}
                {this.onCustomizeView ? this.onCustomizeView() : null}
            </SafeAreaView>
        );
    }

}