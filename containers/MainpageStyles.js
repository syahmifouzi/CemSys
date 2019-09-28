import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dButton: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
    },
    rightTab: {
        backgroundColor: 'red',
        flex: 1,
    },
    leftTab: {
        flex: 1,
    },
    middleTab: {
        flex: 3,
    },
    picturePage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    },
})

module.exports = styles