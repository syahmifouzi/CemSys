import React from "react";
import { View, PanResponder, Dimensions } from 'react-native';
import { observer } from "mobx-react";
import store from "../stores/index.js";
import Rotating from './Rotating.js'
import PizzaSlice from './PizzaSlice'

const screenHeight = Math.round(Dimensions.get('window').height);

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

export default ScrollValComponent