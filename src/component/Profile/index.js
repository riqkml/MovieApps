import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {colors, fonts} from '../../utils';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}> Hello, {this.props.name} </Text>
        <Text style={styles.sublabel}> 0 Point </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  label: {
    color: colors.text.white,
    fontFamily: fonts.semibold,
    fontSize: 22,
  },
  sublabel: {
    color: colors.text.white,
    fontFamily: fonts.extralight,
    fontSize: 22,
  },
});
