/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:
 */

import store from './StorageHelper';
import {STORE} from '../../constants/index';

// 缓存用户信息
export const setLoginInfo = (mLoginInfo) => store.save(STORE.KEY_LOGIN_INFO, mLoginInfo);
export const getLoginInfo = () => store.get(STORE.KEY_LOGIN_INFO);

// 缓存 token
export const getToken = () => store.get(STORE.KEY_TOKEN);
export const setToken = (token) => store.save(STORE.KEY_TOKEN, token);