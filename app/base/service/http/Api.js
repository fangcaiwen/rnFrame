/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:所有的后端请求api
 */

import * as Urls from './Urls';
import httpHelper from './HttpHelper'

// 获取首页信息
export const getHomeApi = () => {
    return httpHelper.GET(Urls.GETHOMEDETAILL());
};
