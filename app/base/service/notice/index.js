/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:通知
 */

import {DeviceEventEmitter} from 'react-native';

// 监听用户信息
export const ListenUserInfo = (callBack) => {
    return DeviceEventEmitter.addListener("USERINFO", (value) => callBack(value));
};
// 发送用户信息更改通知
export const SendNoticeUserInfo = (value) => DeviceEventEmitter.emit("USERINFO", value);