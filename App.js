
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from "./screen/transactionScreen"
import SearchScreen from "./screen/searchScreen"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends React.Component {
 render(){
   return(
     <AppContainer></AppContainer>
   )
 }
}
const tabNavigator = createBottomTabNavigator({
  TransactionScreen:TransactionScreen, SearchScreen:SearchScreen
})
const AppContainer = createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
