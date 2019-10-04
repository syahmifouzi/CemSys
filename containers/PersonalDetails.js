import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from "react-native";
import store from "../stores/index.js";

export default class PersonalDetails extends React.Component {
    constructor(props) {
        super(props);

        this.setup = this.setup.bind(this);
        this.back = this.back.bind(this);
    }

    back() {
        store.pageNav.setPage("home");
    }

    setup() {
        store.pageNav.setPage("setupAuthy");
    }

    render() {
        let bgcolor = '#ff0000'
        is_registered = store.pageNav.is_registered
        if (is_registered) {
            bgcolor = 'green'
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 25 }}></View>
                <View style={{ width: 100 }}>
                    <TouchableOpacity style={{ margin: 10, padding: 10, alignItems: 'center', borderRadius: 10, backgroundColor: '#DDDDDD', }} onPress={this.back}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <FontAwesome name="user-circle-o" size={100} color="grey" />
                    <TouchableOpacity style={{ margin: 10, padding: 10, alignItems: 'center', borderRadius: 10, backgroundColor: bgcolor, }} onPress={this.setup}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Setup Authentication</Text>
                    </TouchableOpacity>
                    <Text>Cem cem</Text>
                    <Text>Height</Text>
                    <Text>BMI</Text>
                    <Text>Rank</Text>
                </View>
            </View>
        )
    }
}