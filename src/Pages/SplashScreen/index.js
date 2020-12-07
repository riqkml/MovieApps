import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Loading} from '../../component';
import {fonts, getData} from '../../utils';
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
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount() {
    const getInfo = async () => {
      const data = await getData('user');
      console.log('data', data);
      if (data != undefined) {
        setTimeout(() => {
          this.setState({isLoading: true});
        }, 3000);
        setTimeout(() => {
          this.setState({isLoading: false});
          this.props.navigation.replace('Home');
        }, 8000);
      } else {
        setTimeout(() => {
          this.setState({isLoading: true});
        }, 3000);
        setTimeout(() => {
          this.setState({isLoading: false});
          this.props.navigation.replace('Login');
        }, 8000);
      }
    };
    getInfo();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={direction[0]}
          end={direction[1]}
          colors={color}
          style={styles.linear}>
          <View style={styles.logowrapper}>
            <Text style={styles.icontext}>MOVIE</Text>
            <Text style={styles.subicontext}>APPSMOBILE</Text>
          </View>
        </LinearGradient>
        {this.state.isLoading && <Loading />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linear: {
    zIndex: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icontext: {
    fontSize: 70,
    color: 'white',
    fontFamily: fonts.semibold,
  },
  subicontext: {
    fontSize: 35,
    color: 'white',
    fontFamily: fonts.regular,
  },
  logowrapper: {
    padding: 20,
    paddingVertical: 50,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: 'white',
  },
});
