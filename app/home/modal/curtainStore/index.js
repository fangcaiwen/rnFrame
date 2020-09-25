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

    // 窗帘打开宽度比例
    @observable
    curtainOpenScale = 0;


    constructor() {

    }

    // 数据初始化
    @action
    initData = () => {
        setTimeout(() => {
            this.type = 'normal';
            this.curtainOpenScale = 0.8;
            this.isLoading = false;
        }, 1000);
    };

    // 改变窗帘打开比例
    @action
    setCurtainOpenScale = (value) => {
        this.curtainOpenScale = value;
    };

    // 改变窗帘类型
    @action
    setCurtainType = () => {
        this.type = "left";
    };

    // 改变比例和类型
    @action
    setCurtainTypeAndOpenScale = (value) => {
        this.curtainOpenScale = value;
        this.type = "right";
    };


    @action
    clearData = () => {
        this.type = 'normal';
        this.isLoading = true;
        this.curtainOpenScale = 0;
    };

}

const curtainStore = new curtainSource();
export default curtainStore;