import Axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Gap} from '..';
import {fonts} from '../../utils';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      list: this.props.state,
      data: this.props.data,
    };
  }
  render() {
    return (
      <View style={{paddingLeft: 20}}>
        <Text
          style={{color: 'white', fontFamily: fonts.semibold, fontSize: 22}}>
          {this.props.title}
        </Text>
        <Gap height={20} />
        <View style={{marginLeft: -20}}>
          <ScrollView horizontal>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Gap width={20} />
              {this.props.data.map((val, index) => {
                return (
                  <View
                    key={index}
                    style={{maxWidth: width * 0.35, marginRight: 20}}>
                    <Image
                      source={{uri: val.Poster}}
                      style={{width: width * 0.35, height: height * 0.25}}
                    />
                    <Gap height={5} />
                    <Text
                      style={{color: 'white', fontFamily: fonts.regular}}
                      numberOfLines={2}>
                      {val.Title}
                    </Text>
                    <Text
                      style={{color: 'white', fontFamily: fonts.extralight}}
                      numberOfLines={2}>
                      {val.Year}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
