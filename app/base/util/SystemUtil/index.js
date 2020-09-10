/**
 * Created by 208439 on 2020/9/10
 *
 * Author: wind
 *
 * Content:系统的工具类方法
 */
import {name as appName} from '../../../../app.json';

// 打印log
const jsConsoleLog = (tag,result) => {
    console.log(`${new Date().toLocaleString()}: ${appName}: ${tag} :`,result);
};

export default {
    jsConsoleLog,
};