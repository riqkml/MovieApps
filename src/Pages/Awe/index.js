import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {Button} from '../../component';
import CheckBox from '@react-native-community/checkbox';
export default class Awe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      check: [],
      data: [
        {id: 1, name: 'udin'},
        {id: 2, name: 'asep'},
        {id: 3, name: 'CJ'},
      ],
      selectedItems: [],
    };
  }
  onClick(id) {
    const data = this.state.selectedItems;
    const idx = data.indexOf(id);
    if (data.includes(id)) {
      data.splice(idx, 1);
    } else {
      data.push(id);
    }
    this.setState({selectedItems: data});
    console.log('awe', this.state.selectedItems);
  }
  onDelete() {
    let dataUser = this.state.data;
    let dataSelection = this.state.selectedItems.sort();
    console.log('datas', dataSelection);
    for (let i = dataSelection.length - 1; i >= 0; i--) {
      dataUser.splice(dataSelection[i], 1);
      dataSelection.splice(i, 1);
    }
    this.setState({
      data: dataUser,
      selectedItems: dataSelection,
    });
  }
  render() {
    console.log('data', this.state.selectedItems);
    return (
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 40,
          paddingVertical: 50,
        }}>
        <TextInput
          onChangeText={(data) => this.setState({name: data})}
          style={{borderColor: 'black', borderWidth: 0.5}}
        />
        <Button
          label="tambah"
          click={() => {
            this.setState({
              data: [
                ...this.state.data,
                {
                  id: this.state.data.length + 1,
                  name: this.state.name,
                  checked: false,
                },
              ],
            });
          }}
        />
        {this.state.data.map((val, index) => {
          return (
            <View key={index} style={{flexDirection: 'row'}}>
              <CheckBox
                disabled={false}
                value={this.state.selectedItems.includes(index)}
                onValueChange={(e) => this.onClick(index)}
              />
              <Text>{val.id}</Text>
              <Text style={{paddingLeft: 20}}>{val.name}</Text>
            </View>
          );
        })}
        {this.state.selectedItems.length > 0 && (
          <Button label="Hapus" click={() => this.onDelete()} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
