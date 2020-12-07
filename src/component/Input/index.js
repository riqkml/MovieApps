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
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.label}>{this.state.text}</Text>
        <Gap height={10} />
        <TextInput
          // onFocus={onFocusForm}
          // onBlur={onBlurForm}
          style={styles.field(this.state.border)}
          // value={this.state.value}
          onEndEditing={this.state.onChangeText}
          secureTextEntry={this.state.secure}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: (border) => ({
    borderWidth: 0.3,
    borderColor: border,
    borderRadius: 5,
    padding: 12,
    color: 'white',
  }),
  label: {
    color: colors.text.white,
    fontSize: 14,
    fontFamily: fonts.light,
  },
});
