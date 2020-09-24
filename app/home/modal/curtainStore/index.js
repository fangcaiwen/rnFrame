/**
 * Created by 208439 on 2020/9/22
 *
 * Author: wind
 *
 * Content:
 */

import {observable, action} from 'mobx';

class curtainSource {


    // 窗帘类型
    @observable
    type = "normal";

    // 是否正在加载数据
    @observable
    isLoading = true;


    constructor() {

    }

    // 数据初始化
    @action
    initData = () => {
        setTimeout(() => {
            this.type = 'normal';
            this.isLoading = false;
        }, 1000);
    };



    @action
    clearData = () => {
        this.type = 'normal';
        this.isLoading = true;
    };

}

const curtainStore = new curtainSource();
export default curtainStore;