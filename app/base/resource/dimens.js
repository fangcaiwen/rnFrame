/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:尺寸
 */
import {Dimensions, Platform, PixelRatio, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const baseWidthPx = 375;
const baseHeightPx = 667;

// 机型
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isIphoneX = (Platform.OS === 'ios' && (Number(((height / width) + "").substr(0, 4)) * 100) === 216);

// 长宽
const scale = uiElementPx => uiElementPx * width / baseWidthPx;
const scaleHeight = uiElementPx => uiElementPx * height / baseHeightPx;

// 文字
const minscale = Math.min(height / 667, width / 375);
const pixelRatio = PixelRatio.get();
const fontScale = PixelRatio.getFontScale();
const setSpText = (number) => {
    number = Math.round((number * minscale + 0.5) * pixelRatio / fontScale);
    return number / PixelRatio.get();
};

export default {
    scale: scale,
    scaleHeight: scaleHeight,
    setSpText: setSpText,

    isIOS: isIOS,
    isAndroid: isAndroid,
    isIphoneX: isIphoneX,

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,

    bigTitle: setSpText(18),
    title: setSpText(16),
    body: setSpText(14),
    remark: setSpText(12),
    small: setSpText(10),

    // 导航栏高度
    navHeight: isIOS ? isIphoneX ? 84 : 64 : 44,

    // 导航左按钮字体
    navLeftTitleFont: setSpText(15),
    // 导航右按钮的字体
    navRightTitleFont: setSpText(15),

    // 导航栏左右按钮image宽度
    navImageWidth: 20 * width / baseWidthPx,
    // 导航栏左右按钮image高度
    navImageHeight: 20 * width / baseWidthPx,

    // 导航title字体
    navTitleFont: setSpText(18),

    hairlineWidth: StyleSheet.hairlineWidth,
}

