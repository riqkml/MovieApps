import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Gap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
    };
  }
  render() {
    return <View style={styles.gap(this.state.width, this.state.height)} />;
  }
}

const styles = StyleSheet.create({
  gap: (width, height) => ({
    width: width,
    height: height,
  }),
});
