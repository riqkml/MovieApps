import React, {Component} from 'react';
import {Dimensions, Text, View, StyleSheet, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Gap, Input, Loading} from '../../component';
import {colors, fonts, storeData} from '../../utils';
import Axios from 'axios';

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
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
    };
  }
  render() {
    const sendData = (data) => {
      try {
        this.setState({isLoading: true});
        Axios.post('https://s1mple-tours-be.herokuapp.com/auth/client/login', {
          username: data.user,
          password: data.pass,
        })
          .then(async (res) => {
            console.log(res);
            showMessage({
              message: 'Success',
              description: `Welcome to apps ${data.user}`,
              type: 'success',
              icon: 'success',
            });
            const infoUser = {
              name: data.user,
              token: res.data.token,
              uid: res.data.payload.userId,
            };
            storeData('user', infoUser);
            this.props.navigation.replace('Home');
            this.setState({isLoading: false});
          })
          .catch((err) => {
            console.log(err);
            showMessage({
              message: err.name,
              description: err.message,
              type: 'danger',
              icon: 'danger',
            });
            this.setState({isLoading: false});
          });
      } catch (err) {
        showMessage({
          message: 'Gagal',
          description: 'Login tidak dapat diproses',
          type: 'danger',
          icon: 'danger',
        });
        this.setState({isLoading: false});
      }
    };
    console.log('link', this.state.username, this.state.password);
    return (
      <View style={{flex: 1}}>
        <LinearGradient
          start={direction[0]}
          end={direction[1]}
          colors={color}
          style={styles.linear}>
          <View style={styles.wrapper}>
            <View style={styles.logowrapper}>
              <Text style={styles.icontext}>MOVIE</Text>
              <Text style={styles.subicontext}>APPSMOBILE</Text>
            </View>
            <View style={{flex: 1}}>
              <Input
                texts={'Username'}
                onChangeText={(user) =>
                  this.setState({username: user.nativeEvent.text})
                }
              />
              <Gap height={20} />
              <Input
                texts={'Password'}
                onChangeText={(pass) =>
                  this.setState({password: pass.nativeEvent.text})
                }
                secure
              />
              <Gap height={80} />
              <Button
                label="Login"
                click={() =>
                  sendData({
                    user: this.state.username,
                    pass: this.state.password,
                  })
                }
              />
            </View>
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
  logowrapper: {paddingVertical: height * 0.1, paddingBottom: 50},
  wrapper: {
    flex: 1,
  },
  label: {
    color: colors.text.white,
  },
});
