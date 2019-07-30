import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import Resource from '../network/Resource'
import DatePicker from 'react-native-datepicker'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#EFEFEF", 
    backgroundColor: "#FEFEFE",
    borderWidth: 1, 
    height: 30, 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    marginBottom: 10
  }
})

export default class create extends Component {

  constructor(props){
    super(props)

    this.state = {
      Location : "",
      ImageUrl : ""
    }
  }

  submitCheckin(){
    let body = {
      location : this.state.Location,
      imageUrl : this.state.ImageUrl
    }

    Resource.createCheckin(body)
    .then((res) => {
      this.resetForm();
      // alert("Submit Sukses")
      // alert(JSON.stringify(body))
    })
    .catch((err) => {
      alert(JSON.stringify(err))
    })
  }

  resetForm(){
    this.setState({
      Location : "",
      ImageUrl : "",
    })
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput 
          style={myStyle.form} 
          value={this.state.Location}
          onChangeText={(Location) => this.setState({Location})}
          placeholder="Location"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.ImageUrl}
          onChangeText={(ImageUrl) => this.setState({ImageUrl})}
          placeholder="ImageUrl"
        />
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.submitCheckin()}>
          <View style={{backgroundColor:"#000080", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
