/**
 * Created by 208439 on 2020/9/8
 *
 * Author: wind
 *
 * Content:全局数据源
 */
import {observable,action} from "mobx";

class appSource {

    // app版本号
    @observable
    appVersion = '1.0.0';

    constructor() {

    }

    //设置app版本号
    @action
    setAppVersion = (version) => {
        this.appVersion = version;
    };

    // 清理数据
    @action
    clearData = () => {
        this.appVersion = "";
    }

}

const appStore = new appSource();
export default appStore;