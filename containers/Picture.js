import React from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import ScrollValComponent from '../components/ScrollValComponent'
import { observer } from "mobx-react";
import store from "../stores/index.js";
import styles from './MainpageStyles.js';

const Picture = observer(
    class Picture extends React.Component {
        constructor(props) {
            super(props);

            this.login = this.login.bind(this);
            this.back = this.back.bind(this);
        }

        back() {
            store.pageNav.setPage("home")
        }

        login() {
            // store.pageNav.setPage("home");
            //check index of passloc
            const lstore = store.pageNav;
            passloc = lstore.passLoc
            actualIndex = lstore.actualIndex
            correctCount = lstore.correctCount
            colourIndex = lstore.colourIndex
            barCount = lstore.barCount
            refreshPizza = lstore.refreshPizza
            barTimer = lstore.barTimer

            actualIndex += colourIndex

            if (actualIndex > 7) {
                actualIndex -= 8
            }

            if (passloc == actualIndex) {
                console.log("correct", passloc, actualIndex)
                correctCount += 1
                if (correctCount > 2) {
                    console.log("1st wrong, 2nd right, reset cCount only", barCount)
                    alert('Sorry, one/both of your attempts are incorrect. Please try again.')
                    lstore.setCorrectCount(0)
                    barCount += 1
                    lstore.setBarCount(barCount)
                } else if (correctCount == 2) {
                    console.log(" 2 times correct, reset all count")
                    lstore.setBarCount(0)
                    lstore.setBarTimer(0);
                    lstore.setCorrectCount(0)
                    refreshPizza = 0
                    lstore.setPage("personal")
                } else {
                    lstore.setCorrectCount(correctCount)
                }
            } else {
                correctCount += 10
                console.log("false", passloc, actualIndex)
                if (correctCount > 15) {
                    console.log("wrong 2 times, reset cCount only", barCount)
                    alert('Sorry, one/both of your attempts are incorrect. Please try again.')
                    correctCount = 0
                    barCount += 1
                    lstore.setBarCount(barCount)
                } else if (correctCount > 10) {
                    console.log("1st right, 2nd wrong, reset cCount only", barCount)
                    alert('Sorry, one/both of your attempts are incorrect. Please try again.')
                    correctCount = 0
                    barCount += 1
                    lstore.setBarCount(barCount)
                }
                lstore.setCorrectCount(correctCount)
            }
            if (barCount > 2) {
                // https://tecadmin.net/get-current-date-time-javascript/
                // https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
                var today = new Date();
                // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                barTimer = barTimer + 1;
                lstore.setBarTimer(barTimer);
                var newTime = new Date(today.getTime() + barTimer*60000);

                // alert('You are barred, please contact admin')
                // console.log('old time is', today)
                // console.log('new time is', newTime.getMinutes())
                lstore.setBarCount(0)
                lstore.setCorrectCount(0)
                refreshPizza = 0
                lstore.setBarFlag(newTime)

                setValue = async () => {
                    try {
                        await AsyncStorage.setItem("barFlag", newTime+'');
                    } catch (e) {
                        // save error
                        alert('Failed to write barred' + e)
                    }
                };

                setValue().then(() => lstore.setPage("home"));
            }

            lstore.setRefreshPizza(refreshPizza + 1)

        }

        render() {
            let corCount = store.pageNav.correctCount
            let conTxt = ''
            if (corCount == 0) {
                conTxt = "Confirm First Attempt"
            } else {
                conTxt = "Confirm Second Attempt"
            }
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 5 }}>
                        <ScrollValComponent />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.dButton} onPress={this.back} >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dButton} onPress={this.login} >
                            <Text>{conTxt}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
)

export default Picture