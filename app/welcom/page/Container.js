/**
 * Created by 208439 on 2020/9/18
 *
 * Author: wind
 *
 * Content:欢迎页
 */
import React from 'react';
import {
    View,
} from 'react-native';
import LoadingView from "../../base/widgets/LoadingView";

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            if (this.state.time === 1) {
                clearInterval(this.timerID);
                this.props.navigation.navigate('Login');
            } else {
                this.setState({
                    time: this.state.time - 1,
                });
            }
        }, 1000);
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <LoadingView/>
            </View>
        )
    }
}