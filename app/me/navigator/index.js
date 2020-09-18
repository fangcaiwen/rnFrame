/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:
 */
import {createStackNavigator} from 'react-navigation-stack';
import {Me} from '../page/index';
import RouteConfig from '../../base/navigator/RouteConfig';

const MeNav = createStackNavigator({
    Root: {screen: Me},
}, {
    initialRouteName: 'Root',
    headerMode: 'none',
    defaultNavigationOptions: RouteConfig.defaultNavigationOptions,
});

MeNav.navigationOptions = RouteConfig.stackNavigatorOptions;

export default MeNav