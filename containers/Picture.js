import React from "react";
import { Text, View, TouchableOpacity, PanResponder, Dimensions, AsyncStorage } from 'react-native';
import { observer } from "mobx-react";
import store from "../stores/index.js";
import styles from './MainpageStyles.js';
import Rotating from '../components/Rotating.js'
import PizzaSlice from '../components/PizzaSlice'

const screenHeight = Math.round(Dimensions.get('window').height);

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

            actualIndex += colourIndex

            if (actualIndex > 7) {
                actualIndex -= 8
            }

            if (passloc == actualIndex) {
                console.log("correct", passloc, actualIndex)
                correctCount += 1
                if (correctCount > 2) {
                    console.log("1st wrong, 2nd right, reset cCount only", barCount)
                    // alert('Wrong')
                    lstore.setCorrectCount(0)
                    barCount += 1
                    lstore.setBarCount(barCount)
                } else if (correctCount == 2) {
                    console.log(" 2 times correct, reset all count")
                    lstore.setBarCount(0)
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
                    // alert('Wrong')
                    correctCount = 0
                    barCount += 1
                    lstore.setBarCount(barCount)
                } else if (correctCount > 10) {
                    console.log("1st right, 2nd wrong, reset cCount only", barCount)
                    // alert('Wrong')
                    correctCount = 0
                    barCount += 1
                    lstore.setBarCount(barCount)
                }
                lstore.setCorrectCount(correctCount)
            }
            if (barCount > 2) {
                alert('You are barred, please contact admin')
                barCount = 0
                lstore.setBarCount(barCount)
                refreshPizza = 0
                lstore.setBarFlag(1)

                setValue = async () => {
                    try {
                        await AsyncStorage.setItem("barFlag", "1");
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
                            <Text>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
)

const ScrollValComponent = observer(
    class ScrollValComponent extends React.Component {
        constructor(props) {
            super(props);
            this._panResponder = PanResponder.create({
                // Ask to be the responder:
                onStartShouldSetPanResponder: (evt, gestureState) => true,
                onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
                onMoveShouldSetPanResponder: (evt, gestureState) => true,
                onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

                onPanResponderGrant: (evt, gestureState) => {
                    // The gesture has started. Show visual feedback so the user knows
                    // what is happening!
                    // gestureState.d{x,y} will be set to zero now
                },
                onPanResponderMove: (evt, gestureState) => {
                    // The most recent move distance is gestureState.move{X,Y}
                    // The accumulated gesture distance since becoming responder is
                    // gestureState.d{x,y}
                    // this.setState({
                    //   value: gestureState.dy
                    // });

                    passVal = (gestureState.dy / screenHeight) * 360
                    store.pageNav.setScrollVal(passVal);
                },
                onPanResponderTerminationRequest: (evt, gestureState) => true,
                onPanResponderRelease: (evt, gestureState) => {
                    // The user has released all touches while this view is the
                    // responder. This typically means a gesture has succeeded
                    passVal = (gestureState.dy / screenHeight) * 360
                    passVal = store.pageNav.lastScrollVal + passVal
                    if (passVal > 360) {
                        passVal = passVal - 360
                    } else if (passVal < -360) {
                        passVal = passVal + 360
                    }
                    if ((passVal >= 0 && passVal < 45) || (passVal < -315 && passVal >= -360)) {
                        passVal = 0
                        store.pageNav.setActualScroll(0, 0)
                    } else if ((passVal >= 45 && passVal < 90) || (passVal < -270 && passVal >= -315)) {
                        passVal = 45
                        store.pageNav.setActualScroll(45, 1)
                    } else if ((passVal >= 90 && passVal < 135) || (passVal < -225 && passVal >= -270)) {
                        passVal = 90
                        store.pageNav.setActualScroll(90, 2)
                    } else if ((passVal >= 135 && passVal < 180) || (passVal < -180 && passVal >= -225)) {
                        passVal = 135
                        store.pageNav.setActualScroll(135, 3)
                    } else if ((passVal >= 180 && passVal < 225) || (passVal < -135 && passVal >= -180)) {
                        passVal = 180
                        store.pageNav.setActualScroll(180, 4)
                    } else if ((passVal >= 225 && passVal < 270) || (passVal < -90 && passVal >= -135)) {
                        passVal = 225
                        store.pageNav.setActualScroll(225, 5)
                    } else if ((passVal >= 270 && passVal < 315) || (passVal < -45 && passVal >= -90)) {
                        passVal = 270
                        store.pageNav.setActualScroll(270, 6)
                    } else if ((passVal >= 315 && passVal < 360) || (passVal < 0 && passVal >= -45)) {
                        passVal = 315
                        store.pageNav.setActualScroll(315, 7)
                    }
                    store.pageNav.setlastScrollVal(passVal);
                },
                onPanResponderTerminate: (evt, gestureState) => {
                    // Another component has become the responder, so this gesture
                    // should be cancelled
                },
                onShouldBlockNativeResponder: (evt, gestureState) => {
                    // Returns whether this component should block native components from becoming the JS
                    // responder. Returns true by default. Is currently only supported on android.
                    return true;
                },
            });

            // this.state = {
            //   value: 0
            // }
        }

        render() {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }} {...this._panResponder.panHandlers} >
                    <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                        <PizzaSlice />
                    </View>
                    <Rotating />
                </View>
            );
        }
    }
)

export default Picture