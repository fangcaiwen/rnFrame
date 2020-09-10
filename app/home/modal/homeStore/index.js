/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:
 */

import {observable, action} from "mobx";

class homeSource {

    @observable
    num = 0;

    @action
    addNum = () => {
        this.num++;
    };

    @action
    clearData = () => {
        this.num = 0;
    };
}

const homeStore = new homeSource();
export default homeStore;