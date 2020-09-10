/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:配置Tab菜单
 */
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {strings, images, dimens, colors} from '../resource/index';
import HomeTabScreen from '../../home/page/Container';
import MineTabScreen from '../../me/page/Container';
// import { TabBottom } from '../widgets/index';

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
        lazy: true, // 默认为true。如果为false，则所有选项卡都将立即呈现。如果为true，则仅在首次使选项卡处于活动状态时才会显示这些选项卡
        initialRouteName: 'Home',// 导航器首次加载时要渲染的路线的名称
        backBehavior: "none",//按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        // tabBar:<Button /> 自定义按钮
        // tabBarVisible:false, // true或false显示或隐藏标签栏（如果未设置），则默认为true
        tabBarOptions: tabbaroption,//tab的样式等配置
        tabBarPosition:'bottom'
    });

export default AppTab;