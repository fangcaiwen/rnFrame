/**
 * Created by 208439 on 2020/9/10
 *
 * Author: wind
 *
 * Content:
 */

const isEmpty = (obj) => {
    return typeof obj == "undefined" || obj == null || obj == "" || JSON.stringify(obj) == "{}" || JSON.stringify(obj) == "[]";
};

export default {
    isEmpty
}