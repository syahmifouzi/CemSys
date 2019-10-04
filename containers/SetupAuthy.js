import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Picker, AsyncStorage } from "react-native";
import store from "../stores/index.js";

const abjad = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#', '@']

export default class SetupAuthy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            colour: 'purple',
            colourIndex: 0,
            warning: 0
        };

        this.save = this.save.bind(this);
        this.back = this.back.bind(this);
    }

    back() {
        store.pageNav.setPage("personal")
    }

    save() {
        txt = this.state.text
        sameFlag = 0
        if (txt.length != 8) {
            this.setState({ warning: 1 })
        } else {
            for (let i = 0; i < 8; i++) {
                for (let j = i + 1; j < 8; j++) {
                    if (txt.charAt(i) == txt.charAt(j)) {
                        sameFlag = 1
                        break
                    }
                }
                if (sameFlag) { break }
            }
            if (sameFlag) {
                this.setState({ warning: 1 })
            } else {
                finalFlag = 1
                for (const pass of txt) {
                    correctFlag = 0
                    for (const abj of abjad) {
                        if (pass == abj) {
                            correctFlag = 1
                        }
                    }
                    if (!correctFlag) {
                        finalFlag = 0
                        this.setState({ warning: 1 })
                        break
                    }
                }
                if (finalFlag) {
                    colourIndex = this.state.colourIndex
                    // console.log(colourIndex, txt)
                    setValue = async () => {
                        try {
                            await AsyncStorage.multiSet([["colourIndex", colourIndex.toString()], ["password", txt], ["is_registered", "1"]]);
                            // await AsyncStorage.setItem("colourIndex", "hello")
                        } catch (e) {
                            // save error
                            alert('Error write to disk:' + e)
                        }
                    };

                    setValue().then(() => {
                        store.pageNav.setIs_registered(1)
                        store.pageNav.setColourIndex(colourIndex)
                        store.pageNav.setPassword(txt)
                        store.pageNav.setPage("personal")
                    });
                    this.setState({ warning: 0 })
                }
            }
        }
    }

    render() {
        let showWarning = <Text />
        if (this.state.warning) {
            showWarning =
                <View>
                    <Text style={{ color: 'red' }}><FontAwesome name="times-circle" size={20} color="red" /> Make sure it is exactly 8 characters</Text>
                    <Text style={{ color: 'red' }}><FontAwesome name="times-circle" size={20} color="red" /> Make sure a character is only used once</Text>
                    <Text style={{ color: 'red' }}><FontAwesome name="times-circle" size={20} color="red" /> Only use these symbols(if any): '@' and/or '#'</Text>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Click here to see the demo again</Text>
                </View>
        } else {
            showWarning = <Text />
        }
        return (
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled >
                <View style={{ height: 25 }}></View>
                <View style={{ width: 100 }}>
                    <TouchableOpacity style={{ margin: 10, padding: 10, alignItems: 'center', borderRadius: 10, backgroundColor: '#DDDDDD', }} onPress={this.back}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1, marginTop: '30%' }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View><Text>Your Choosen Colour: </Text></View>
                            <View><View style={{ width: 50, height: 50, backgroundColor: this.state.colour }}></View></View>
                        </View>
                        <Picker
                            selectedValue={this.state.colour}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.setState({ colour: itemValue, colourIndex: itemIndex })
                            }}>
                            <Picker.Item label="Purple" value="purple" />
                            <Picker.Item label="Blue" value="blue" />
                            <Picker.Item label="Green" value="green" />
                            <Picker.Item label="Yellow" value="yellow" />
                            <Picker.Item label="Orange" value="orange" />
                            <Picker.Item label="White" value="white" />
                            <Picker.Item label="Black" value="black" />
                            <Picker.Item label="Red" value="red" />
                        </Picker>
                        <View style={{ height: 50, width: 10 }}></View>
                        <Text>Write your password: </Text>
                        {showWarning}
                        <View style={{ height: 10, width: 10 }}></View>
                        <TextInput
                            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, padding: 10 }}
                            onChangeText={text => this.setState({ text })}
                            value={this.state.text}
                            placeholder="Password"
                        />

                        <TouchableOpacity style={{ margin: 10, padding: 10, alignItems: 'center', borderRadius: 10, backgroundColor: '#DDDDDD', }} onPress={this.save}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}