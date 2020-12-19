import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {fonts} from '../../utils';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.data,
    };
  }
  render() {
    const {movie} = this.state;
    const imagePoster = {uri: movie.Poster};
    return (
      <View style={styles.card} key={movie.imdbID}>
        <View>
          <Image source={imagePoster} style={styles.img} />
        </View>
        <View style={styles.tabImg}>
          <View>
            <Text style={styles.label} numberOfLines={2}>
              {movie.Title}
            </Text>
          </View>
          <View style={styles.tabDesc}>
            <View style={styles.chip()}>
              <Text style={styles.subLabel}>{movie.Type}</Text>
            </View>
            <View style={styles.chip()}>
              <Text style={styles.subLabel}>{movie.Year}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabImg: {flex: 1, paddingHorizontal: 10},
  tabDesc: {flexDirection: 'row', paddingVertical: 20},
  wrapper: {paddingLeft: 20},
  titleMovie: {color: 'white', fontFamily: fonts.semibold, fontSize: 22},
  containScroll: {marginLeft: -20},
  box: {flex: 1, flexDirection: 'row'},
  card: {
    marginBottom: 10,
    flexDirection: 'row',
    padding: 10,
  },
  img: {width: width * 0.35, height: height * 0.3},
  label: {color: 'white', fontFamily: fonts.semibold, fontSize: 22},
  chip: () => ({
    backgroundColor: '#7f8c8d',
    padding: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 5,
  }),
  subLabel: {color: 'white', fontFamily: fonts.regular, fontSize: 16},
});
