import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native'
// import {
//   Button,
// } from 'native-base';

import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import mainScreen from '../screens/main'
import createScreen from '../screens/create'
import detailScreen from '../screens/detail'
import editScreen from '../screens/edit'
import profileScreen from '../screens/profile'
import locationScreen from '../screens/location'
import checkinScreen from '../screens/checkin'
import historyScreen from '../screens/history'

class HistoryTitle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ProfileScreen")}
        // onPress={() => alert('This is a button!')}
      >
        <Image
          source={require('../assets/images/history.png')}
          style={{ width: 28, height: 28, marginRight: 10, tintColor: '#fff' }}
        />
      </TouchableOpacity>
    );
  }
}


const HeaderStyle = () => ({
  headerStyle: {
    backgroundColor: '#254F6E',
    textAlign: 'center',
    fontWeight: 'normal'
  },
  headerTintColor: '#deffffff',
})

// const MainTab = createMaterialTopTabNavigator({
//   MainTab: {
//     screen: mainScreen,
//     navigationOptions: (props) => ({
//       title: "TAKE PHOTO",

//     })
//   }
// });

export default Main = createStackNavigator({
  MainScreen: {
    screen: mainScreen,
    navigationOptions: (props) => ({
      title: "Checkin",
      headerRight: (
        <HistoryTitle />
      ),
    })
  },
  DetailScreen: {
    screen: detailScreen,
    navigationOptions: (props) => ({
      title: "Detail",
    })
  },
  CreateScreen: {
    screen: createScreen,
    navigationOptions: (props) => ({
      title: "Create",
    })
  },
  EditScreen: {
    screen: editScreen,
    navigationOptions: (props) => ({
      title: "Edit",
    })
  },
  LocationScreen: {
    screen: locationScreen,
    navigationOptions: (props) => ({
      title: "Location",
    })
  },
  CheckinScreen: {
    screen: checkinScreen,
    navigationOptions: (props) => ({
      title: "Checkin Detail",
    })
  },
  HistoryScreen: {
    screen: historyScreen,
    navigationOptions: (props) => ({
      title: "History",
    })
  },

},
  {
    initialRouteName: "MainScreen",
    defaultNavigationOptions: HeaderStyle,
  });
