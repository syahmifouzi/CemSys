import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { observer } from "mobx-react";
import store from "../stores/index.js";
import styles from "./MainpageStyles.js";

// let UID123_delta = {
//     "users": {
//         "syahmi@gmail.com": {
//             "date": "october",
//             "name": "mimo"
//         },
//         "aris": {
//             "date": "december",
//             "name": "eri"
//         }
//     }
// };

const Mainpage = observer(
    class Mainpage extends React.Component {
        constructor(props) {
            super(props);

            this.editPersonal = this.editPersonal.bind(this);
            this.writeDatabase = this.writeDatabase.bind(this);
            this.readDatabase = this.readDatabase.bind(this);
            this.deleteDatabase = this.deleteDatabase.bind(this);
        }

        editPersonal() {
            //   store.pageNav.setPage("pic");
            // console.log(JSON.stringify(UID123_delta))

            retrieveData = async () => {
                try {
                    const retrievedItem = await AsyncStorage.multiGet(["is_registered", "colourIndex", "password", "barFlag"]);
                    return retrievedItem
                } catch (error) {
                    // Error retrieving data
                    console.log(error.message);
                }
            };

            retrieveData().then((item) => {
                if (item[0][1] == null) {
                    console.log("if item is null")
                    store.pageNav.setPage("personal");
                } else {
                    console.log("if item is NOT null")
                    numColorIndex = parseInt(item[1][1])
                    numbarFlag = parseInt(item[3][1])
                    if (item[0][1] == "1") {
                        console.log("go to authy page after gather private info:", item)
                        store.pageNav.setIs_registered(1);
                        store.pageNav.setColourIndex(numColorIndex);
                        store.pageNav.setPassword(item[2][1]);
                        if (numbarFlag) {
                            alert('you are barred, contact admin to reset password')
                        } else { store.pageNav.setPage("pic"); }
                    } else {
                        console.log("for some reason, item is registered != 1")
                    }
                }
            }).catch((error) => {
                console.log('Promise is rejected with error: ' + error);
            });

        }

        writeDatabase() {
            setValue = async () => {
                try {
                    console.log("writing.");
                    await AsyncStorage.setItem("MyApp_key", "my secret value 2");
                } catch (e) {
                    // save error
                }

                console.log("Done.");
            };

            setValue();
        }

        readDatabase() {
            retrieveData = async () => {
                try {
                    // const value = await AsyncStorage.getItem("MyApp_key");
                    const value = await AsyncStorage.getAllKeys();
                    if (value !== null) {
                        // We have data!!
                        console.log(value);
                    }
                } catch (error) {
                    // Error retrieving data
                }
                console.log("read");
            };

            retrieveData();
        }

        deleteDatabase() {
            deleteData = async () => {
                try {
                    const value = await AsyncStorage.removeItem("barFlag");
                } catch (error) {
                    // Error retrieving data
                }

                console.log("deleted");
            };

            deleteData();
        }

        render() {
            return (
                <View style={styles.container}>
                    <FontAwesome name="user-circle-o" size={100} color="grey" />
                    <Text>Cem cem</Text>
                    <TouchableOpacity style={styles.dButton} onPress={this.editPersonal}>
                        <Text>Edit Your Details</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.dButton} onPress={this.deleteDatabase}>
                        <Text>delete</Text>
                    </TouchableOpacity> */}
                </View>
            );
        }
    }
);

export default Mainpage;
