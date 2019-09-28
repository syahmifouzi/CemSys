import React from "react";
import { Text, View, TouchableOpacity, PanResponder, Dimensions } from 'react-native';
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
    }

    login() {
      store.pageNav.setPage("home");
    }

    render() {
      return (
        <View style={{flex:1}}>
          <View style={{flex:5}}>
            <ScrollValComponent />
          </View>
          <View style={{flex:1}}>
            <Text>Actual --> {store.pageNav.actualScroll}</Text>
            <Text>{store.pageNav.scrollVal} degree</Text>
            <TouchableOpacity style={styles.dButton} onPress={this.login} >
              <Text>Go to home</Text>
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
        <View style={{ flex: 1, justifyContent:'center', backgroundColor: 'green' }} {...this._panResponder.panHandlers} >
          <View style={{ position: 'absolute', backgroundColor:'blue', width:'100%', height:'100%'}}>
                <PizzaSlice />
              </View>
              <Rotating />
        </View>
      );
    }
  }
)

export default Picture