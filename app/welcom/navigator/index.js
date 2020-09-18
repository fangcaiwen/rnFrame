/**
 * Created by 208439 on 2020/9/18
 *
 * Author: wind
 *
 * Content:
 */
import {createStackNavigator} from 'react-navigation-stack';
import {Welcome} from '../page/index';
import RouteConfig from '../../base/navigator/RouteConfig';

const WelcomeNav = createStackNavigator({
    Root: {screen: Welcome},
}, {
    initialRouteName: 'Root',
    headerMode: 'none',
    defaultNavigationOptions: RouteConfig.defaultNavigationOptions,
});

WelcomeNav.navigationOptions = RouteConfig.stackNavigatorOptions;

export default WelcomeNav