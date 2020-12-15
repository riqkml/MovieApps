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
      <View style={styles.wrapper}>
        <Text style={styles.titleMovie}>{this.props.title}</Text>
        <Gap height={20} />
        <View style={styles.containScroll}>
          <ScrollView horizontal>
            <View style={styles.box}>
              <Gap width={20} />
              {this.props.data.map((val, index) => {
                return (
                  <View key={index} style={styles.card}>
                    <Image source={{uri: val.Poster}} style={styles.img} />
                    <Gap height={5} />
                    <Text style={styles.label} numberOfLines={2}>
                      {val.Title}
                    </Text>
                    <Text style={styles.subLabel} numberOfLines={2}>
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

const styles = StyleSheet.create({
  wrapper: {paddingLeft: 20},
  titleMovie: {color: 'white', fontFamily: fonts.semibold, fontSize: 22},
  containScroll: {marginLeft: -20},
  box: {flex: 1, flexDirection: 'row'},
  card: {maxWidth: width * 0.35, marginRight: 20},
  img: {width: width * 0.35, height: height * 0.25},
  label: {color: 'white', fontFamily: fonts.regular},
  subLabel: {color: 'white', fontFamily: fonts.extralight},
});
