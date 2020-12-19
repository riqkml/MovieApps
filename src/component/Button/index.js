import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.label,
      onPress: this.props.click,
      alternate: this.props.alternate,
    };
  }
  componentDidMount() {
    console.log('acs');
  }
  render() {
    console.log('render');
    return (
      <TouchableOpacity
        style={styles.container(this.state.alternate)}
        onPress={this.state.onPress}>
        <Text style={styles.label(this.state.alternate)}>
          {this.state.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: (alternate) => ({
    backgroundColor: alternate ? colors.primary : '#f1f2f6',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: alternate ? 10 : 0,
  }),
  label: (alternate) => ({
    fontSize: alternate ? 14 : 18,
    fontFamily: fonts.regular,
    textAlign: 'center',
    color: alternate ? colors.white : '#182C61',
  }),
});
