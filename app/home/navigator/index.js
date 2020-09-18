/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:
 */
import {createStackNavigator} from 'react-navigation-stack';
import {Home, HomeList} from '../page/index';
import RouteConfig from '../../base/navigator/RouteConfig';

const HomeNav = createStackNavigator({
        Root: {screen: Home},
        HomeList: {screen: HomeList},
    },
    {
        initialRouteName: 'Root',
        headerMode: 'none',
        defaultNavigationOptions: RouteConfig.defaultNavigationOptions,
    });

HomeNav.navigationOptions = RouteConfig.stackNavigatorOptions;

export default HomeNav