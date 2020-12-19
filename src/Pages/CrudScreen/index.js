import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Button, Input} from '../../component';
import {addStudent, deleteStudent} from '../../Redux/Action/actionStudent';

class CrudScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false,
      id: 0,
      name: '',
      age: '',
      data: this.props.student,
    };
  }

  addData() {
    this.props.addStudent({
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
    });
  }

  deleteData(id) {
    this.props.deleteStudent(id);
  }
  render() {
    console.log('awe', this.state, this.props);
    return (
      <View style={{flex: 1, padding: 20}}>
        <View>
          <Input
            texts="Nama"
            // value={this.state.name}
            onChangeText={(e) => this.setState({name: e.nativeEvent.text})}
            alternate
          />
          <Input
            texts="Umur"
            // value={this.state.age}
            onChangeText={(e) => this.setState({age: e.nativeEvent.text})}
            alternate
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 15,
            }}>
            {this.state.isUpdate && (
              <View style={{marginRight: 10}}>
                <Button label="Ubah Data" alternate />
              </View>
            )}
            <View>
              <Button
                click={() => this.addData()}
                label="Tambah Data"
                alternate
              />
            </View>
          </View>
        </View>
        <ScrollView>
          <View>
            <Text>List Data</Text>
            {this.props.student.map((val, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{flexDirection: 'row'}}
                  onPress={() => {
                    this.setState({
                      id: val.id,
                      name: val.name,
                      age: val.age,
                      isUpdate: true,
                    });
                  }}>
                  <View style={{flex: 2}}>
                    <Text
                      numb>{`${val.id} nama: ${val.name} | umur : ${val.age}`}</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.deleteData(val.id)}>
                    <Text>HAPUS DATANYA</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  console.log(state);
  return {
    student: state.student,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    addStudent: (data) => dispatch(addStudent(data)),
    deleteStudent: (id) => dispatch(deleteStudent(id)),
  };
};

export default connect(mapStateToProps, dispatchToProps)(CrudScreen);
