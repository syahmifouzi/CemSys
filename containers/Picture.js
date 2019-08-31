import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { observer } from "mobx-react";
import store from "../stores/index.js";
import styles from './MainpageStyles.js'

const Picture = observer(
    class Picture extends React.Component {
        constructor(props) {
            super(props);

            this.login = this.login.bind(this);
        }

        login() {
            store.pageNav.setPage("home");
        }

        render() {
            return (
                <View>
                    <Text>Hello picture World!</Text>
                    <TouchableOpacity style={styles.dButton} onPress={this.login} >
                        <Text>Go to home</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
)

export default Picture