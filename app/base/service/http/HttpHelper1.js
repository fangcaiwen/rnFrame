/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:
 */
import {getToken} from "../cache";

const checkStatus = (response) => {
    if (response.code == 200) {
        return response;
    }

    const error = new Error(response);
    throw error;
};

const parseJSON = response => response.json();

export const FETCH = (url, options) => {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => {
            return data;
        })
        .catch((error) => {
            return error;
        });
};

const request = (url, options) => {
    return getToken().then((token) => {
        const {headers, ...others} = options;

        let combineHeaders = {...headers};
        if (token) {
            combineHeaders = {'intebox_sso_app': 'AptGuest', 'intebox_sso_tkt': token, ...headers};
        }
        return FETCH(url, {
            ...others,
            headers: combineHeaders
        });
    });
};

// get请求
export const GET = (url) => {
    return request(url, {
        method: 'GET',
        contentType: 'application/json',
        ...options,
    })
        .then(res => {
            return res;
        })
        .catch(error => error);
};

// post请求
export const POST = (url, params = {}) => {
    return request(url, {
        method: 'POST',
        body: params,
        ...options,
    })
        .then(resp => resp)
        .catch(error => error);
};

// Put 请求
export const PUT = (url, params = {}) => {
    return request(url, {
        method: 'POST',
        body: params,
        ...options,
    })
        .then(resp => resp)
        .catch(error => error);
};

// DELETE 请求
export const DELETE = (url) => {

};

// 上传
export const UPLOAD = () => {

};