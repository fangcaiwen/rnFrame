/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:
 */
class HttpHelper {
    constructor() {
        this._api = "";
        this._authorization = "";
        this._errorHandler = null;
    }

    init(api, errorHandler) {
        this._api = api;
        this._errorHandler = errorHandler;
    }

    getAuthorization() {
        return this._authorization
    }

    setAuthorization(value) {
        this._authorization = value
    }

    GET(mUrl, params = null, rawResponse = false) {
        let argString = "";
        if (params) {
            for (let key in params) {
                argString += `${key}=${params[key]}&`
            }
        }
        let url = `${this._api}${mUrl}${params ? "?" + argString : ""}`;

        return new Promise((resolve, reject) => {

            let options = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json; charset=utf-8',
                    'authorization': this._authorization
                },
            };

            fetch(url, options)
                .then(response => {
                    if (rawResponse) {
                        resolve(response);
                        return
                    }
                    return response.json().then((result) => {
                        resolve(result);

                        // 判断结果code通不通
                        // if (result.code == 200) {
                        //     resolve(result)
                        // } else {
                        //     this._errorHandler("出错啦");
                        //     reject("出错啦")
                        // }
                    })
                })
                .catch(error => {
                    this._errorHandler(error);
                    reject(error)
                })
        })
    }

    POST(mUrl, params = null, useJson = true, rawResponse = false) {
        let body = "";
        if (params) {
            if (useJson) {
                body = JSON.stringify(params);
            }
            else {
                body = new FormData();
                for (let key in params) {
                    body.append(key, params[key]);
                }
            }
        }

        let options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'accept': 'application/json',
                'connection': 'close',
                'content-Type': useJson ? 'application/json' : 'multipart/form-data',
                'authorization': this._authorization
            },
            body: body
        }
        let url = `${this._api}${mUrl}`;

        console.log("[POST]" + url)

        return new Promise((resolve, reject) => {
            fetch(url, options)
                .then(response => {
                    if (!!rawResponse) {
                        resolve(response);
                        return
                    }

                    response.json().then((result) => {
                        if (result.code == 200) {
                            resolve(result)
                        } else {
                            this._errorHandler(error);
                            reject(error)
                        }
                    })
                })
                .catch(error => {
                    this._errorHandler(error);
                    reject(error)
                })
        })
    }

    UPLOAD(mUrl, params = null, rawResponse = false) {
        let body = "";
        if (params) {
            body = new FormData();
            for (let key in params) {
                body.append(key, params[key])
            }
        }

        let options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'accept': 'application/json',
                'connection': 'close',
                'content-Type': 'multipart/form-data',
                'authorization': this._authorization
            },
            body: body
        }
        let url = `${this._api}${mUrl}`;

        return new Promise((resolve, reject) => {
            fetch(url, options)
                .then(response => {
                    if (!!rawResponse) {
                        resolve(response);
                        return
                    }

                    response.json().then((result) => {
                        if (result.code == 200) {
                            resolve(result)
                        } else {
                            this._errorHandler(error);
                            reject(error)
                        }
                    })
                })
                .catch(error => {
                    this._errorHandler(error);
                    reject(error)
                })
        })
    }
}

const httpHelper = new HttpHelper();
export default httpHelper;