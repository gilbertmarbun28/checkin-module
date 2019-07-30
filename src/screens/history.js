import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Platform,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
  } from 'react-native';
import { colors, fonts } from '../styles';
import { RadioGroup, GridRow } from '../components';
import Resource from '../network/Resource'

export default class profile extends Component {
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
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}
          data={this.state.data}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("HistoryScreen",{
                data: this.state.data[index]
              })}
            }>
        
        <TouchableOpacity
        style={styles.itemTwoContainer}
        >
        <View style={styles.itemTwoContent}>
            <Image style={styles.itemTwoImage} source={{uri: item.imageUrl}} />
            <View style={styles.itemTwoOverlay} />
            <Text style={styles.itemTwoTitle}>Wednesday, July 28, 2019 3:45 AM</Text>
            <Text style={styles.itemTwoSubTitle}>{item.location}</Text>
        </View>
        </TouchableOpacity>



        
        </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    tabsContainer: {
      alignSelf: 'stretch',
      marginTop: 30,
    },
    itemOneContainer: {
      flex: 1,
      width: Dimensions.get('window').width / 2 - 40,
    },
    itemOneImageContainer: {
      borderRadius: 3,
      overflow: 'hidden',
    },
    itemOneImage: {
      height: 200,
      width: Dimensions.get('window').width / 2 - 40,
    },
    itemOneTitle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 15,
    },
    itemOneSubTitle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 13,
      color: '#B2B2B2',
      marginVertical: 3,
    },
    itemOnePrice: {
      fontFamily: fonts.primaryRegular,
      fontSize: 15,
    },
    itemOneRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    itemOneContent: {
      marginTop: 5,
      marginBottom: 10,
    },
    itemTwoContainer: {
      padding: 15,
      backgroundColor: 'white',
      paddingRight: 15,
      paddingTop: 1
    },
    itemTwoContent: {
      padding: 20,
      position: 'relative',
      marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
      height: 150,
    },
    itemTwoTitle: {
      color: colors.white,
      fontFamily: fonts.primaryBold,
      fontSize: 20,
    },
    itemTwoSubTitle: {
      color: colors.white,
      fontFamily: fonts.primaryRegular,
      fontSize: 15,
      marginVertical: 5,
    },
    itemTwoPrice: {
      color: colors.white,
      fontFamily: fonts.primaryBold,
      fontSize: 20,
    },
    itemTwoImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: Dimensions.get('window').width / 2 - 30,
      width: Dimensions.get('window').width * 0.92,
    },
    itemTwoOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: '#6271da',
      opacity: 0.5,
    },
    itemThreeContainer: {
      backgroundColor: 'white',
    },
    itemThreeSubContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    itemThreeImage: {
      height: 100,
      width: 100,
    },
    itemThreeContent: {
      flex: 1,
      paddingLeft: 15,
      justifyContent: 'space-between',
    },
    itemThreeBrand: {
      fontFamily: fonts.primaryRegular,
      fontSize: 14,
      color: '#617ae1',
    },
    itemThreeTitle: {
      fontFamily: fonts.primaryBold,
      fontSize: 16,
      color: '#5F5F5F',
    },
    itemThreeSubtitle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 12,
      color: '#a4a4a4',
    },
    itemThreeMetaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemThreePrice: {
      fontFamily: fonts.primaryRegular,
      fontSize: 15,
      color: '#5f5f5f',
      textAlign: 'right',
    },
    itemThreeHr: {
      flex: 1,
      height: 1,
      backgroundColor: '#e3e3e3',
      marginRight: -15,
    },
    badge: {
      backgroundColor: colors.secondary,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
  });
