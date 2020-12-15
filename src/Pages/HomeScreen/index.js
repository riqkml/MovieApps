import Axios from 'axios';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {MovieList, Profile} from '../../component';
import {dangerAlert, getData} from '../../utils';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const direction = [
  {x: -1, y: 3},
  {x: 4, y: 2.1},
];
const color = [
  '#000D1F',
  '#000F22',
  '#001027',
  '#001345',
  '#001A66',
  '#0B246C',
];
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesone: [],
      moviestwo: [],
      moviesthree: [],
      name: '',
    };
  }
  componentDidMount() {
    if (this.props.naruto && this.props.avenger && this.props.onePiece) {
      this.setState({
        moviesone: this.props.naruto,
        moviestwo: this.props.avenger,
        moviesthree: this.props.onePiece,
      });
    } else {
      this.getMovie('naruto', 'Marvel', 'one-piece');
    }
  }
  getMovie = async (listNaruto, listAvenger, listOnePiece) => {
    const send = await Promise.all([
      Axios.get(`http://www.omdbapi.com/?s=${listNaruto}&apikey=997061b4`),
      Axios.get(`http://www.omdbapi.com/?s=${listAvenger}&apikey=997061b4`),
      Axios.get(`http://www.omdbapi.com/?s=${listOnePiece}&apikey=997061b4`),
    ]);
    if (send) {
      const movie = res[0].data.Search;
      const movietwo = res[1].data.Search;
      const moviethree = res[2].data.Search;
      const data = await getData('user');
      this.setState({
        name: data.name,
        moviesone: movie,
        moviestwo: movietwo,
        moviesthree: moviethree,
      });
    } else {
      dangerAlert('Gagal', 'Terjadi Masalah');
    }
  };
  render() {
    const {moviesone, moviestwo, moviesthree, name} = this.state;
    console.log('asd', this.props);
    return (
      <ScrollView showsHorizontalScrollIndicator={false}>
        <LinearGradient
          start={direction[0]}
          end={direction[1]}
          colors={color}
          style={styles.linear}>
          <Profile name={name} />
          <MovieList title="Naruto" data={moviesone} />
          <MovieList title="Marvel" data={moviestwo} />
          <MovieList title="One Piece" data={moviesthree} />
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  linear: {
    zIndex: 2,
    flex: 1,
  },
});
function mapStateToProps(state) {
  return {
    onePiece: state.OnePiece,
    avenger: state.Avenger,
    naruto: state.Naruto,
  };
}

export default connect(mapStateToProps)(HomeScreen);
