import React from "react";
import { Easing, Animated, Image } from 'react-native';


export default class Rotating extends React.Component {
    state = {
        spinValue: new Animated.Value(0),  
    }
  
    componentDidMount() {
        Animated.loop(Animated.timing(                  
            this.state.spinValue,                                   // The animated value to drive
            {
                toValue: 1,                   // Animate to 360/value
                duration: 2000,              // Make it take a while
                easing: Easing.linear,
                useNativeDriver: true,
            }
        )).start();                    // Starts the animation
    }
  
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
        let spin = this.state.spinValue.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <Animated.View                 
                style={{
                    ...this.props.style,
                    transform: [{rotate:spin}],                     // Bind rotation to animated value
                }}
            >
                {this.props.children}
                <Image source={pic} style={{width: 193, height: 110}}/>
            </Animated.View>
        );
    }
  };

