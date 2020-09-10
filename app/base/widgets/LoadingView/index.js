/**
 * Created by 208439 on 2018/12/12
 *
 * Author: wind
 *
 * Content:加载loading
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text, StyleSheet, View } from 'react-native';
import { colors,strings } from '../../resource/index';
import dimens from "../../resource/dimens";

const LoadingView = (props) => {
    const {
        titleStyle,
    } = props;
    return (
    <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.theme}/>
        <Text style={[styles.loadingText,titleStyle]}>{strings.loading}</Text>
    </View>
)
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    loadingText: {
        marginTop: dimens.scaleHeight(10),
        textAlign: 'center',
        fontSize: dimens.body,
        color: '#AAA'
    }
});

LoadingView.propTypes={
    titleStyle: PropTypes.object,
};

const defaultProps = {
};
LoadingView.defaultProps = defaultProps;

export default LoadingView;