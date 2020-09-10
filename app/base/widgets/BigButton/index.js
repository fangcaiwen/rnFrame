/**
 * Created by 208439 on 2018-11-16
 *
 * Author: wind
 *
 * Content:大按钮组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import { colors,dimens} from '../../resource/index';
import { View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const BigButton = (props) => {
    const {
        viewStyle,
        buttonStyle,
        title,
        titleStyle,
        isCanClick,
        onPressEvent
    } = props;

    const Component = isCanClick ? TouchableOpacity : View;
    return (
        <View style={[styles.viewStyle,viewStyle]} >
            <Component style={[styles.container,buttonStyle,!isCanClick?{opacity:0.5}:{}]}  onPress={onPressEvent}>
                <Text style={[styles.textStyle,titleStyle]}>{title}</Text>
            </Component>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        width:dimens.scale(297),
        height:dimens.scale(50),
        backgroundColor:colors.theme,
        borderRadius:dimens.scale(4),
        alignItems:'center',
        justifyContent: 'center'
    },
    textStyle:{
        fontSize:18,
        color:colors.white
    }
});

BigButton.propTypes={
    viewStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    title:PropTypes.string,
    titleStyle: PropTypes.object,
    isCanClick:PropTypes.bool,
    onPressEvent:PropTypes.func
};

const defaultProps = {
    isCanClick: true
};
BigButton.defaultProps = defaultProps;

export default BigButton;