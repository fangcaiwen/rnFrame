/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:顶部导航组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import {images, colors, dimens} from '../../resource/index';
import {Image, View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';

const barBtnWidth = 40;

const NavigationBar = (props) => {
    const {
        LeftComponent,
        rightComponent,
        titleComponent,
        leftContainerStyle,
        leftViewContainerStyle,
        rightContainerStyle,
        titleContainerStyle,
        leftIcon,
        leftTitle,
        leftIconStyle,
        leftTitleStyle,
        onLeftPress,
        rightIcon,
        rightTitle,
        rightIconStyle,
        rightTitleStyle,
        onRightPress,
        onTitlePress,
        title,
        titleStyle,
        hiddenLeft,
        hiddenRight,
        hidden,
        hiddenBottomLine,
        navigationStyle,
        removeLeftView
    } = props;

    const renderLeft = () => {
        let component;
        if (hiddenLeft) {
            return (
                removeLeftView ? null : <View style={{width: barBtnWidth}}/>
            );
        }
        if (leftIcon && !leftTitle) {
            component = (
                <Image style={[styles.leftIconStyle, leftIconStyle && leftIconStyle]}
                       source={leftIcon}
                />
            );
        } else if (!leftIcon && leftTitle) {
            component = (
                <Text numberOfLines={1}
                      style={[styles.leftTitleStyle, leftTitleStyle && leftTitleStyle]}>
                    {leftTitle}
                </Text>
            );
        } else if (leftIcon && leftTitle) {
            component = (<View style={[styles.leftViewContainerStyle, leftViewContainerStyle || {}]}>
                <Image style={[styles.leftIconStyle, leftIconStyle && leftIconStyle]}
                       source={leftIcon}/>
                <Text numberOfLines={1}
                      style={[styles.leftTitleStyle, leftTitleStyle && leftTitleStyle]}>
                    {leftTitle}
                </Text>
            </View>)

        } else {
            component = (
                <Image style={styles.iconStyle}
                       source={images.nav_back}/>
            );
        }

        return (
            <TouchableOpacity style={[styles.leftContainerStyle, leftContainerStyle && leftContainerStyle]}
                              onPress={onLeftPress}>
                {component}
            </TouchableOpacity>
        );
    };

    const renderTitle = () => {
        // TODO 等有标题点击需求再实现
        // const Component = onTitlePress && JSON.stringify(onTitlePress) !== '{}' ? TouchableOpacity : View;
        const Component = View;

        return (
            <Component style={[styles.titleContainerStyle, titleContainerStyle && titleContainerStyle]}
                       onPress={onTitlePress}>
                <Text style={[styles.titleStyle, titleStyle && titleStyle]}
                      ellipsizeMode="tail"
                      numberOfLines={1}>
                    {title}
                </Text>
            </Component>
        );
    };

    const renderRight = () => {
        let component;
        if (hiddenRight) {
            return <View style={styles.rightContainerStyle}/>;
        }
        if (rightIcon) {
            component = (
                <Image style={[styles.rightIconStyle, rightIconStyle && rightIconStyle]}
                       source={rightIcon}
                />
            );
        } else if (rightTitle) {
            component = (
                <Text numberOfLines={1}
                      style={[styles.rightTitleStyle, rightTitleStyle && rightTitleStyle]}>
                    {rightTitle}
                </Text>
            );
        } else {
            component = <View style={{width: barBtnWidth}}/>;
        }

        return (
            <TouchableOpacity
                style={[styles.rightContainerStyle, rightContainerStyle && rightContainerStyle]}
                onPress={onRightPress}>
                {component}
            </TouchableOpacity>
        );
    };

    const renderContent = () => {
        if (hidden) {
            return <View/>;
        }
        return (
            <View
                style={[styles.navBarStyle, navigationStyle && navigationStyle, hiddenBottomLine && {borderBottomWidth: 0}]}>
                <View style={[styles.navContentStyle]}>
                    {LeftComponent || renderLeft()}
                    {titleComponent || renderTitle()}
                    {rightComponent || renderRight()}
                </View>
            </View>
        );
    };

    return (
        renderContent()
    );
};

const styles = StyleSheet.create({
    navBarStyle: {
        height: dimens.navHeight,
        backgroundColor: colors.navTopBgColor,
        borderBottomWidth: dimens.hairlineWidth,
        borderBottomColor: colors.navBorderColor,
        paddingTop: dimens.isAndroid ? 0 : dimens.isIphoneX ? 40 : 20,
    },
    navContentStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: dimens.scale(44)
    },
    leftContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: barBtnWidth,
        height: dimens.navHeight
    },
    leftViewContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: barBtnWidth,
        height: dimens.navHeight
    },
    leftTitleStyle: {
        fontSize: dimens.navLeftTitleFont,
        color: colors.navLeftTitleColor,
    },
    leftIconStyle: {
        marginLeft: dimens.scale(20),
        width: dimens.navImageWidth,
        height: dimens.navImageHeight,
    },
    iconStyle: {
        marginLeft: dimens.scale(20),
        width: dimens.navImageWidth,
        height: dimens.navImageHeight,
    },
    rightTitleStyle: {
        marginRight: dimens.scale(20),
        fontSize: dimens.navRightTitleFont,
        color: colors.navRightTitleColor
    },
    rightIconStyle: {
        marginRight: dimens.scale(20),
        width: dimens.navImageWidth,
        height: dimens.navImageHeight,
    },
    titleStyle: {
        fontSize: dimens.navTitleFont,
        color: colors.navTitleColor,
        textAlign: 'center',
    },
});

NavigationBar.propTypes = {
    LeftComponent: PropTypes.node,
    rightComponent: PropTypes.node,
    titleComponent: PropTypes.node,
    leftContainerStyle: PropTypes.object,
    rightContainerStyle: PropTypes.object,
    titleContainerStyle: PropTypes.object,
    leftIcon: PropTypes.any,
    leftTitle: PropTypes.string,
    onLeftPress: PropTypes.func,
    rightIcon: PropTypes.any,
    rightTitle: PropTypes.string,
    onRightPress: PropTypes.func,
    onTitlePress: PropTypes.func,
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    hiddenLeft: PropTypes.bool,
    hiddenRight: PropTypes.bool,
    hidden: PropTypes.bool,
    hiddenBottomLine: PropTypes.bool,
    navigationStyle: PropTypes.object,
};

const defaultProps = {
    hidden: false,
    hiddenLeft: false,
    hiddenRight: false,
};

NavigationBar.defaultProps = defaultProps;

export default NavigationBar;