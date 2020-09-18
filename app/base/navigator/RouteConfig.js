/**
 * Created by 208439 on 2020/9/17
 *
 * Author: wind
 *
 * Content:
 */
import stackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView';
import {TransitionPresets} from "react-navigation-stack";


// 默认导航配置
const  defaultNavigationOptions = {
    ...TransitionPresets.DefaultTransition,
};

//BottomTabBar在非根界面隐藏。
const stackNavigatorOptions =  ({ navigation }) => {
    return {
        tabBarVisible:navigation.state.index === 0
    };
};

export default  {
    defaultNavigationOptions,
    stackViewStyleInterpolator,
    stackNavigatorOptions
};