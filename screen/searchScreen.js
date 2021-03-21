import React from "react"
import {Text,View, StyleSheet} from "react-native"

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                 Search for book and student
                </Text>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});