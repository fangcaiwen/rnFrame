/**
 * Created by 208439 on 2020/9/16
 *
 * Author: wind
 *
 * Content:输入
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {colors, dimens} from '../../resource/index';
import {View, TextInput, StyleSheet} from 'react-native';

class RowInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || '',
        };
    }

    componentDidMount() {

    }

    render() {
        const {
            borderButtom,
            placeholder,
            defaulValue,
            maxLength,
            onChangeEvent,
            isPwd,
        } = this.props;
        return (
            <View
                style={[styles.container, borderButtom ? {
                    borderBottomWidth: dimens.hairlineWidth,
                    marginBottom: dimens.hairlineWidth
                } : {borderBottomWidth: 0}]}>
                <TextInput
                    style={styles.inputStyle}
                    defaultValue={defaulValue}
                    placeholder={placeholder || '请输入...'}
                    placeholderTextColor={colors.placeholderColor}
                    onChangeText={value => onChangeEvent(value)}
                    underlineColorAndroid="transparent"
                    maxLength={maxLength || 20}
                    secureTextEntry={isPwd ? true : false}
                />
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        width: dimens.screenWidth,
        height: dimens.scale(55),
        backgroundColor: colors.white,
        paddingLeft: dimens.scale(15),
        paddingRight: dimens.scale(15),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: dimens.hairlineWidth,
        borderBottomColor: colors.white,
    },
    inputStyle: {
        flex: 1,
        fontSize: dimens.title,
        color: colors.remark
    },

});

RowInput.propTypes = {
    placeholder: PropTypes.string,
    defaulValue: PropTypes.string,
    onChangeEvent: PropTypes.func,
    maxLength: PropTypes.number,
    isPwd: PropTypes.bool,
    borderButtom: PropTypes.bool,
};

const defaultProps = {
    isPwd: false,
    borderButtom: true
};
RowInput.defaultProps = defaultProps;

export default RowInput;