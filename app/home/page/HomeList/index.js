/**
 * Created by 208439 on 2020/9/9
 *
 * Author: wind
 *
 * Content:首页列表页
 */
import React from "react";
import {
    StyleSheet,
    View,
    FlatList
} from "react-native";
import {observer, inject} from 'mobx-react';
import BasePage from "../../../base/page/BasePage";
import {BigButton, LoadingView} from "../../../base/widgets/index";

@inject("home")
@observer
export default class HomeList extends BasePage {

    constructor(props) {
        super(props);
    }

    navigationOptions() {
        return {
            hiddenBottomLine: false,
            title: "列表页面",
        };
    }

    componentDidMount() {
        this.getInitData();
    }

    componentWillUnmount() {
        const {HomeListStore} = this.props.home;
        HomeListStore.clearData();
    }

    getInitData = () => {
        const {HomeListStore} = this.props.home;
        HomeListStore.initData();
    };

    renderItem = ({item, index}) => {
        return <BigButton title={item.title} viewStyle={{marginTop: 20}}/>
    };

    renderContent() {
        const {HomeListStore} = this.props.home;
        if (HomeListStore.isLoading) {
            return <LoadingView/>
        }
        return (
            <View style={styles.container}>
                <FlatList
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => 'index' + item + index}
                    data={HomeListStore.list}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    bounces={true}
                    onRefresh={this.getInitData}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


