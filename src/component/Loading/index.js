import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Modal} from 'react-native';
import {Gap} from '..';
import {colors, fonts} from '../../utils';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [
        'he Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.',
        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        'Twelve years before the start of the series, the Nine-Tails attacked Konohagakure destroying much of the village and taking many lives.',
        'Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village leader and strongest ninja. ',
        'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby,',
      ],
      title:
        'Spider-Man is a fictional superhero in the Marvel Comics and the main protagonist in the Marvel Universe.',
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        title: this.state.obj[
          Math.floor(Math.random() * this.state.obj.length)
        ],
      });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <Modal>
        <View style={styles.wrapper}>
          <ActivityIndicator size="large" color={colors.white} />
          <Text style={styles.text}>{this.state.title}</Text>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.extralight,
    color: colors.white,
    marginTop: 20,
    textAlign: 'center',
  },
});
