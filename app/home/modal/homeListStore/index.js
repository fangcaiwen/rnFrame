/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:
 */
import {observable, action} from "mobx";
import {getHomeApi} from "../../../base/service/http/Api";
import {SystemUtil, ValiformUtil} from "../../../base/util";

class homeListSource {

    @observable
    list = [];

    @observable
    isLoading = true;

    @action
    initData = () => {
        getHomeApi().then((value) => {
            SystemUtil.jsConsoleLog("api请求列表", value);
            this.isLoading = false;
            if (ValiformUtil.isEmpty(value)) return;
            this.list = value?.movies;
        });
    };

    @action
    clearData = () => {
        this.list = [];
        this.isLoading = true;
    };
}

const homeListStore = new homeListSource();
export default homeListStore;