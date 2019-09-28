import React from "react";
import { Animated, Image } from 'react-native';
import { observer } from "mobx-react";
import store from "../stores/index.js";
import pic from "../assets/kaler.png"

export default Rotating = observer(
    class Rotating extends React.Component {
        
        render() {
            let toRotate = store.pageNav.actualScroll
            let strRot = toRotate + "deg"

            return (
                <Animated.View
                    style={{
                        flex:1,
                        transform: [{ rotate: strRot }],                     // Bind rotation to animated value
                    }}
                >
                    <Image source={pic} style={{ flex:1, width:null, height: null, resizeMode: 'contain'}} />
                </Animated.View>
            );
        }
    }
)