import React, { Component } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity,Image } from 'react-native';
import Resource from '../network/Resource'

export default class detail extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      data: []
    }
  }
  componentDidMount(){
    this.getData();
  }

  getData(){
    this.setState({loading: true})
    
    Resource.getCheckin()
    .then((res) => {
      this.setState({loading: false, data: res.data})
    })
    .catch((err) => {
      alert(err)
    })
  }

  render() {
    return (
      <View>
        <Button title="Tambah Task" onPress={() => this.props.navigation.navigate("CreateScreen")} />
        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}
          data={this.state.data}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailScreen",{
                data: this.state.data[index]
              })}
            }>
              <View style={{marginBottom:20, padding:20, borderBottomColor: "#aaa", borderBottomWidth: 1, flexDirection: "row"}}>
                <View style={{flex:1}}>
                  <Text>{item.lateStatus}</Text>
                  <Text>{item.location}</Text>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={{width:200, height: 200}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
