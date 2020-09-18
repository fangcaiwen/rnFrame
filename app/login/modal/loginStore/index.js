/**
 * Created by 208439 on 2020/9/16
 *
 * Author: wind
 *
 * Content:登录数据源
 */
import {observable, action} from "mobx";
import {ValiformUtil} from "../../../base/util/index"
import {login} from "../../../base/service/http/Api";

class loginSource {

    // 账号
    @observable
    mAccount = "13167178785";

    // 密码
    @observable
    password = "123321";

    // 更改账号
    @action
    setAccount = (text) => {
        this.mAccount = text;
    };

    // 更改密码
    @action
    setPassword = (text) => {
        this.password = text;
    };

    @action
    goToLogin = () => {
        if (ValiformUtil.isEmpty(this.mAccount)) {
            alert("账号不能为空");
            return;
        }
        if (ValiformUtil.isEmpty(this.password)) {
            alert("密码不能为空");
            return;
        }
        login({"username": this.mAccount, "password": this.password}).then((value) => {
            alert(JSON.stringify(value))
        });
    };

    @action
    clearData = () => {
        this.mAccount = "";
        this.password = "";
    };
}

const loginStore = new loginSource();
export default loginStore;