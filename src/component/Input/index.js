import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {colors, fonts} from '../../utils';
import Gap from '../Gap';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.texts,
      border: colors.white,
      secure: this.props.secure,
      value: this.props.value,
      onChangeText: this.props.onChangeText,
      alternate: this.props.alternate,
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.label(this.state.alternate)}>
          {this.state.text}
        </Text>
        <Gap height={10} />
        <TextInput
          // onFocus={onFocusForm}
          // onBlur={onBlurForm}
          style={styles.field(this.state.border, this.state.alternate)}
          // value={this.props.value}
          onEndEditing={this.state.onChangeText}
          secureTextEntry={this.state.secure}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: (border, alternate) => ({
    borderWidth: 0.3,
    borderColor: alternate ? colors.secondary : border,
    borderRadius: 5,
    padding: 12,
    color: alternate ? colors.secondary : 'white',
  }),
  label: (alternate) => ({
    color: alternate ? colors.secondary : colors.text.white,
    fontSize: 14,
    fontFamily: fonts.light,
  }),
});
