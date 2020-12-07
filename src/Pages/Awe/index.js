import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from '../../utils';

export default class Awe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'test',
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 4000);
  }
  list = async () => {
    this.getData('name')
      .then((res) => {
        console.log('ini fungsi list', res);
        this.setState({text: res});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData = async (val) => {
    try {
      const value = await AsyncStorage.getItem(val);
      //   console.log('val', value);
      if (value !== null) {
        // value previously stored
      }
      return value;
    } catch (e) {
      // error reading value
    }
  };
  //   storeData = async (value) => {
  //     try {
  //       const jsonValue = JSON.stringify(value);
  //       await AsyncStorage.setItem('@storage_Key', jsonValue);
  //     } catch (e) {
  //       // saving error
  //     }
  //   };
  render() {
    const storeData = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value);
        // console.log(key, value);
      } catch (e) {
        // saving error
      }
    };
    return (
      <View>
        <Text>awe</Text>
        <TouchableOpacity
          onPress={() => storeData('name', 'ini disimpan di asyncstorage')}>
          <Text>pencet</Text>
        </TouchableOpacity>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
