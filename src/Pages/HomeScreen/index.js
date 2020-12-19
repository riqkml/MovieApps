import Axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {Loading, MovieList, Profile} from '../../component';
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
      movies: [],
      name: '',
      isLoading: false,
    };
  }
  componentDidMount() {
    this._getMovie();
  }
  async _getMovie() {
    try {
      this.setState({isLoading: true});
      const response = await Axios.get(
        `http://www.omdbapi.com/?s=marvel&apikey=997061b4`,
      );
      if (response.data.Response) {
        const movie = response.data.Search;
        const data = await getData('user');
        this.setState({
          name: data.name,
          movies: movie,
        });
        this.setState({isLoading: false});
      } else {
        dangerAlert('Gagal', 'Terjadi Masalah');
        this.setState({isLoading: false});
      }
    } catch (e) {
      dangerAlert(e.name, e.message);
      this.setState({isLoading: false});
    }
  }
  render() {
    const {name, movies, isLoading} = this.state;
    return (
      <LinearGradient
        start={direction[0]}
        end={direction[1]}
        colors={color}
        style={styles.linear}>
        <Profile name={name} />
        <FlatList
          data={movies}
          renderItem={({item: movie}) => {
            return <MovieList data={movie} />;
          }}
          keyExtractor={(movie) => movie.imdbID}
        />
        {isLoading && <Loading />}
      </LinearGradient>
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
