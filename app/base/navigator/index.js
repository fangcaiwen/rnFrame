/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:
 */

import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import MainTab from './MainTab';
import LoginNav from '../../login/navigator/index';
import RouteConfig from "./RouteConfig";


const AppRootNavigator = createAnimatedSwitchNavigator({
        Login: LoginNav,
        Main: MainTab
    },
    {
        defaultNavigationOptions: RouteConfig.defaultNavigationOptions,
        initialRouteName: 'Login',
    }
);

const AppRoot = createAppContainer(AppRootNavigator);

export default AppRoot