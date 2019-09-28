import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { observer } from "mobx-react";
import store from "../stores/index.js";
import styles from './MainpageStyles.js'

const Mainpage = observer(
    class Mainpage extends React.Component {
        constructor(props) {
            super(props);

            this.login = this.login.bind(this);
        }

        login() {
            store.pageNav.setPage("pic");
        }

        render() {
            return (
                <View style={styles.container}>
                    <Text>Hello World!</Text>
                    <TouchableOpacity style={styles.dButton} onPress={this.login} >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
)

export default Mainpage