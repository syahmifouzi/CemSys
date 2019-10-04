import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import { observer } from "mobx-react";
import store from "../stores/index.js";
import styles from "./MainpageStyles.js";

let UID123_delta = {
    "users":{
        "syahmi@gmail.com":{
            "date":"october",
            "name":"mimo"
        },
        "aris":{
            "date":"december",
            "name":"eri"
        }
    }
  };

const Mainpage = observer(
  class Mainpage extends React.Component {
    constructor(props) {
      super(props);

      this.login = this.login.bind(this);
      this.writeDatabase = this.writeDatabase.bind(this);
      this.readDatabase = this.readDatabase.bind(this);
      this.deleteDatabase = this.deleteDatabase.bind(this);
    }

    login() {
    //   store.pageNav.setPage("pic");
    console.log(JSON.stringify(UID123_delta))
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
          const value = await AsyncStorage.getItem("@MyApp_key");
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
          const value = await AsyncStorage.removeItem("@MyApp_key");
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
          <Text>Hello World!</Text>
          <TouchableOpacity style={styles.dButton} onPress={this.login}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dButton} onPress={this.writeDatabase}>
            <Text>write</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dButton} onPress={this.readDatabase}>
            <Text>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dButton}
            onPress={this.deleteDatabase}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
);

export default Mainpage;
