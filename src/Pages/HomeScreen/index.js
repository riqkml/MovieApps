import Axios from 'axios';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MovieList, Profile} from '../../component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../../utils';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const direction = [
  {x: 0, y: 3},
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
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesone: [],
      moviestwo: [],
      name: '',
    };
  }

  componentDidMount() {
    this.getMovie('naruto', 'Marvel');
  }
  getMovie = (listnaruto, listavenger) => {
    try {
      Promise.all([
        Axios.get(`http://www.omdbapi.com/?s=${listnaruto}&apikey=997061b4`),
        Axios.get(`http://www.omdbapi.com/?s=${listavenger}&apikey=997061b4`),
      ])
        .then(async (res) => {
          const movie = res[0].data.Search;
          const movietwo = res[1].data.Search;
          this.setState({moviesone: movie});
          this.setState({moviestwo: movietwo});
          const data = await getData('user');
          this.setState({name: data.name});
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  render() {
    return (
      <LinearGradient
        start={direction[0]}
        end={direction[1]}
        colors={color}
        style={styles.linear}>
        <Profile name={this.state.name} />
        <MovieList title="Naruto" data={this.state.moviesone} />
        <MovieList title="Marvel" data={this.state.moviestwo} />
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
