/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:
 */

import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';

import LoginNav from '../../login/navigator/index';
import WelcomeNav from '../../welcom/navigator/index';
import RouteConfig from "./RouteConfig";
import MainTab from "./MainTab";
import HomeNav from "../../home/navigator/index";
import BaseNav from "./BaseNav";
import MeNav from "../../me/navigator/index";


const navigatiors = {
    ...HomeNav,
    ...BaseNav,
    ...MeNav,
};

// 主项目导航
const StackTab = createStackNavigator({
        Tab: {
            screen: MainTab,
        },
        ...navigatiors
    },
    {
        initialRouteName: 'Tab',
        headerMode: 'none',
        defaultNavigationOptions: RouteConfig.defaultNavigationOptions,
    });

StackTab.navigationOptions = RouteConfig.stackNavigatorOptions;


const AppRootNavigator = createAnimatedSwitchNavigator({
        Welcome:WelcomeNav,
        Login: LoginNav,
        Main: StackTab
    },
    {
        defaultNavigationOptions: RouteConfig.defaultNavigationOptions,
        initialRouteName: 'Welcome',
    }
);

const AppRoot = createAppContainer(AppRootNavigator);

export default AppRoot