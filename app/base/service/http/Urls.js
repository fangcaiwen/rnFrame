/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:后端请求urls
 */

// 获取首页信息
export const GETHOMEDETAILL = () => `/react-native/movies.json`;

// 带参数的url
export const PUTPARAMS = (id) => `/v1/families/${id}`;

// 登录
export const LOGINURL = () => `/v1/auth/form`;