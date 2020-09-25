/**
 * Created by 208439 on 2020/9/24
 *
 * Author: wind
 *
 * Content:
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ViewPropTypes, Text} from 'react-native';
import {colors} from "../../../base/resource";

class GnTouchViewText extends Component {
    constructor(props) {
        super(props);
        const {title} = this.props;
        this.state = {
            showTitle: title
        };
    }

    changeTitle = (value) => {
        this.setState({
            showTitle: value
        });
    };

    UNSAFE_componentWillReceiveProps(nextProps,nextContext){
        this.changeTitle(nextProps.title);
    }


    render() {
        console.log("CurtainPage GnTouchViewText is Refresh");
        const {showTitle} = this.state;
        const {viewStyle} = this.props;
        return (
            <View style={[styles.container, viewStyle]}>
                <Text style={{color: colors.white}}>{`窗帘开启${(showTitle*100).toFixed(0)}%`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.theme,
    },
});

GnTouchViewText.propTypes = {
    viewStyle: ViewPropTypes.style,
    title: PropTypes.number,
};

const defaultProps = {
    title: 0
};
GnTouchViewText.defaultProps = defaultProps;

export default GnTouchViewText;