/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:
 */

import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import MainTab from './MainTab';
import MeNav from '../../me/navigator/index';
import HomeNav from '../../home/navigator/index';
import BaseNav from './BaseNav';

const navigatiors = {
    ...HomeNav,
    ...BaseNav,
    ...MeNav,
};

/*
 * 配置堆栈导航
 */
const navStack = createStackNavigator({
    Tab: MainTab,
    ...navigatiors
},{
    headerMode: 'none',
    mode: 'card',
    initialRouteName: "Tab"
});

export default createAppContainer(navStack);