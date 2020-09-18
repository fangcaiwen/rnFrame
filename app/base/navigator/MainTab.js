/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:配置Tab菜单
 */
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {strings, images, dimens, colors} from '../resource/index';
import HomeTabScreen from '../../home/navigator/index';
import MineTabScreen from '../../me/navigator/index';

// tab的样式等配置
const tabbaroption = {
    activeTintColor: colors.theme, // 当前选中的tab bar的文本颜色和图标颜色
    inactiveTintColor: colors.remark,//当前未选中的tab bar的文本颜色和图标颜色
    activeBackgroundColor: colors.white,// 当前选中的tab背景色
    inactiveBackgroundColor: colors.white,// 当前未选中的tab背景色
    showIcon: true, // 是否显示标签标签图标，默认为true。
    showLabel:true, // 是否显示标签标签文字，默认为true。
    labelStyle: { //tab bar的文本样式
        fontSize: dimens.remark, // 文字大小
        marginTop: 0
    },
    tabStyle: { // tab页的样式
        alignItems: 'center',
        justifyContent: 'center',
    },
    style:{ // 标签栏的样式对象

    }
};

const AppTab = createBottomTabNavigator(
    {
        Home: {
            screen: HomeTabScreen,
            navigationOptions: {
                tabBarLabel: strings.home,
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={images.home_normal}
                        style={[{height: dimens.scale(24), width: dimens.scale(26)}, {tintColor: tintColor}]}/>
                ),
            }
        },
        Mine: {
            screen: MineTabScreen,
            navigationOptions: {
                tabBarLabel: strings.mime,
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={images.mine_normal}
                        style={[{height: dimens.scale(24), width: dimens.scale(26)}, {tintColor: tintColor}]}/>
                ),
            }
        },
    },
    {
        initialRouteName: 'Home',// 导航器首次加载时要渲染的路线的名称
        tabBarOptions: tabbaroption,//tab的样式等配置
    });

export default AppTab;