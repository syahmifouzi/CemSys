import React from "react";
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';

export default class Triangle extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.TriangleShapeCSS} ><Text>Hello</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
   
  TriangleShapeCSS: {
   
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00BCD4'
  }
   
  });