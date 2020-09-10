/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:
 */

import {observable, action} from "mobx";

class meSource {

    @observable
    mData = "初始值";

    @action
    setData = (src) => {
        this.mData = src;
    };

    @action
    clearData = () => {
        this.mData = "";
    };
}

const meStore = new meSource();
export default meStore;