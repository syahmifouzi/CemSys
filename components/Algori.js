import React from "react";
import { Text, View, TouchableOpacity, PanResponder } from 'react-native';

export default class Algori extends React.Component {
    render () {
        let cars = ["Proton","Saga","Perdana"]
        return(
            <View><Text>{cars[0]} </Text></View>
        )
    }
}