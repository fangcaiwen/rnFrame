/**
 * Created by 208439 on 2020/9/17
 *
 * Author: wind
 *
 * Content:登录路由
 */
import {createStackNavigator} from 'react-navigation-stack';
import {LoginPage} from '../page/index';
import RouteConfig from '../../base/navigator/RouteConfig';

const LoginNav = createStackNavigator({
    Root: {screen: LoginPage},
}, {
    initialRouteName: 'Root',
    headerMode: 'none',
    defaultNavigationOptions: RouteConfig.defaultNavigationOptions,
});

LoginNav.navigationOptions = RouteConfig.stackNavigatorOptions;

export default LoginNav