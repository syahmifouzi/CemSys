import React from "react";
import { View, Image, Text, Dimensions } from 'react-native';
import pic from "../assets/pizza.png"

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const abjad = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#', '@']
const password = ['c', 'e', 'M', 'C', 'E', 'm', '#', '0']

let letter1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter1[0] = '52%'
letter1[1] = '54%'
letter1[2] = '55%'
letter1[3] = '56%'
letter1[4] = '64%'
letter1[5] = '62%'
letter1[6] = '58%'
letter1[7] = '60%'
letter1[8] = '53%'
letter1[9] = '59%'
letter1[10] = '52%'
letter1[11] = '63%'
letter1[12] = '62%'
letter1[13] = '65%'
letter1[14] = '56%'
letter1[15] = '67%'

let letter2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter2[0] = '59%'
letter2[1] = '51%'
letter2[2] = '64%'
letter2[3] = '53%'
letter2[4] = '68%'
letter2[5] = '55%'
letter2[6] = '70%'
letter2[7] = '51%'
letter2[8] = '74%'
letter2[9] = '54%'
letter2[10] = '78%'
letter2[11] = '56%'
letter2[12] = '78%'
letter2[13] = '51%'
letter2[14] = '77%'
letter2[15] = '60%'

let letter3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter3[0] = '59%'
letter3[1] = '51%'
letter3[2] = '64%'
letter3[3] = '53%'
letter3[4] = '68%'
letter3[5] = '55%'
letter3[6] = '70%'
letter3[7] = '51%'
letter3[8] = '74%'
letter3[9] = '54%'
letter3[10] = '78%'
letter3[11] = '56%'
letter3[12] = '78%'
letter3[13] = '51%'
letter3[14] = '77%'
letter3[15] = '60%'

let letter4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter4[0] = '52%'
letter4[1] = '54%'
letter4[2] = '55%'
letter4[3] = '56%'
letter4[4] = '64%'
letter4[5] = '62%'
letter4[6] = '58%'
letter4[7] = '60%'
letter4[8] = '53%'
letter4[9] = '59%'
letter4[10] = '52%'
letter4[11] = '63%'
letter4[12] = '62%'
letter4[13] = '65%'
letter4[14] = '56%'
letter4[15] = '67%'

let letter5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter5[0] = '52%'
letter5[1] = '54%'
letter5[2] = '55%'
letter5[3] = '56%'
letter5[4] = '64%'
letter5[5] = '62%'
letter5[6] = '58%'
letter5[7] = '60%'
letter5[8] = '53%'
letter5[9] = '59%'
letter5[10] = '52%'
letter5[11] = '63%'
letter5[12] = '62%'
letter5[13] = '65%'
letter5[14] = '56%'
letter5[15] = '67%'

let letter6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter6[0] = '59%'
letter6[1] = '51%'
letter6[2] = '64%'
letter6[3] = '53%'
letter6[4] = '68%'
letter6[5] = '55%'
letter6[6] = '70%'
letter6[7] = '51%'
letter6[8] = '74%'
letter6[9] = '54%'
letter6[10] = '78%'
letter6[11] = '56%'
letter6[12] = '78%'
letter6[13] = '51%'
letter6[14] = '77%'
letter6[15] = '60%'

let letter7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter7[0] = '59%'
letter7[1] = '51%'
letter7[2] = '64%'
letter7[3] = '53%'
letter7[4] = '68%'
letter7[5] = '55%'
letter7[6] = '70%'
letter7[7] = '51%'
letter7[8] = '74%'
letter7[9] = '54%'
letter7[10] = '78%'
letter7[11] = '56%'
letter7[12] = '78%'
letter7[13] = '51%'
letter7[14] = '77%'
letter7[15] = '60%'

let letter8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
letter8[0] = '52%'
letter8[1] = '54%'
letter8[2] = '55%'
letter8[3] = '56%'
letter8[4] = '64%'
letter8[5] = '62%'
letter8[6] = '58%'
letter8[7] = '60%'
letter8[8] = '53%'
letter8[9] = '59%'
letter8[10] = '52%'
letter8[11] = '63%'
letter8[12] = '62%'
letter8[13] = '65%'
letter8[14] = '56%'
letter8[15] = '67%'

export default class PizzaSlice extends React.Component {
    render() {
        // console.log('hello world', abjad.length)
        //Math.floor((Math.random() * 10) + 1);
        let notPassword = []
        let pizza = []
        for (let i = 0; i < 8; i++) {
            pizza[i] = [];
        }
        let p = 0
        let q = 0
        for (const abj of abjad) {
            let passFlag = 0
            for (const pass of password) {
                if (abj == pass) {
                    passFlag = 1
                }
            }
            if (!passFlag) {
                notPassword[p] = abj
                p += 1
            }
        }
        for (let i = notPassword.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = notPassword[i]
            notPassword[i] = notPassword[j]
            notPassword[j] = temp
        }
        for (let i = password.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = password[i]
            password[i] = password[j]
            password[j] = temp
        }
        for (let i = 0; i < 8; i++) {
            if (i == 0) {
                pizza[i] = [password[0], password[1], password[2], password[3], notPassword[0], notPassword[1], notPassword[2], notPassword[3]]
                q = 4
            } else if (i == 1 || i == 2 || i == 3 || i == 4) {
                pizza[i][0] = password[i + 3]
                for (let j = 1; j < 8; j++) {
                    pizza[i][j] = notPassword[q]
                    q += 1
                }
            } else {
                for (let j = 0; j < 8; j++) {
                    pizza[i][j] = notPassword[q]
                    q += 1
                }
            }
        }
        for (let i = pizza.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = pizza[i]
            pizza[i] = pizza[j]
            pizza[j] = temp

            for (let k = pizza[i].length - 1; k > 0; k--) {
                const l = Math.floor(Math.random() * k)
                const temp = pizza[i][k]
                pizza[i][k] = pizza[i][l]
                pizza[i][l] = temp
            }

            for (let k = pizza[j].length - 1; k > 0; k--) {
                const l = Math.floor(Math.random() * k)
                const temp = pizza[j][k]
                pizza[j][k] = pizza[j][l]
                pizza[j][l] = temp
            }
        }

        //   console.log('hello world', pizza[7])
        return (
            <View style={{ flex: 1 }}>
                <Image source={pic} style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} />

                <View style={{ position: 'absolute', left: letter1[0], bottom: letter1[1] }}><Text>{pizza[0][0]}</Text></View>
                <View style={{ position: 'absolute', left: letter1[2], bottom: letter1[3] }}><Text>{pizza[0][1]}</Text></View>
                <View style={{ position: 'absolute', left: letter1[4], bottom: letter1[5] }}><Text>{pizza[0][2]}</Text></View>
                <View style={{ position: 'absolute', left: letter1[6], bottom: letter1[7] }}><Text>{pizza[0][3]}</Text></View>
                <View style={{ position: 'absolute', left: letter1[8], bottom: letter1[9] }}><Text>{pizza[0][4]}</Text></View>
                <View style={{ position: 'absolute', left: letter1[10], bottom: letter1[11] }}><Text>{pizza[0][5]}</Text></View>
                <View style={{ position: 'absolute', left: letter1[12], bottom: letter1[13] }}><Text>{pizza[0][6]}</Text></View>
                <View style={{ position: 'absolute', left: letter1[14], bottom: letter1[15] }}><Text>{pizza[0][7]}</Text></View>

                <View style={{ position: 'absolute', left: letter2[0], bottom: letter2[1] }}><Text>{pizza[1][0]}</Text></View>
                <View style={{ position: 'absolute', left: letter2[2], bottom: letter2[3] }}><Text>{pizza[1][1]}</Text></View>
                <View style={{ position: 'absolute', left: letter2[4], bottom: letter2[5] }}><Text>{pizza[1][2]}</Text></View>
                <View style={{ position: 'absolute', left: letter2[6], bottom: letter2[7] }}><Text>{pizza[1][3]}</Text></View>
                <View style={{ position: 'absolute', left: letter2[8], bottom: letter2[9] }}><Text>{pizza[1][4]}</Text></View>
                <View style={{ position: 'absolute', left: letter2[10], bottom: letter2[11] }}><Text>{pizza[1][5]}</Text></View>
                <View style={{ position: 'absolute', left: letter2[12], bottom: letter2[13] }}><Text>{pizza[1][6]}</Text></View>
                <View style={{ position: 'absolute', left: letter2[14], bottom: letter2[15] }}><Text>{pizza[1][7]}</Text></View>

                <View style={{ position: 'absolute', left: letter3[0], top: letter3[1] }}><Text>{pizza[2][0]}</Text></View>
                <View style={{ position: 'absolute', left: letter3[2], top: letter3[3] }}><Text>{pizza[2][1]}</Text></View>
                <View style={{ position: 'absolute', left: letter3[4], top: letter3[5] }}><Text>{pizza[2][2]}</Text></View>
                <View style={{ position: 'absolute', left: letter3[6], top: letter3[7] }}><Text>{pizza[2][3]}</Text></View>
                <View style={{ position: 'absolute', left: letter3[8], top: letter3[9] }}><Text>{pizza[2][4]}</Text></View>
                <View style={{ position: 'absolute', left: letter3[10], top: letter3[11] }}><Text>{pizza[2][5]}</Text></View>
                <View style={{ position: 'absolute', left: letter3[12], top: letter3[13] }}><Text>{pizza[2][6]}</Text></View>
                <View style={{ position: 'absolute', left: letter3[14], top: letter3[15] }}><Text>{pizza[2][7]}</Text></View>

                <View style={{ position: 'absolute', left: letter4[0], top: letter4[1] }}><Text>{pizza[3][0]}</Text></View>
                <View style={{ position: 'absolute', left: letter4[2], top: letter4[3] }}><Text>{pizza[3][1]}</Text></View>
                <View style={{ position: 'absolute', left: letter4[4], top: letter4[5] }}><Text>{pizza[3][2]}</Text></View>
                <View style={{ position: 'absolute', left: letter4[6], top: letter4[7] }}><Text>{pizza[3][3]}</Text></View>
                <View style={{ position: 'absolute', left: letter4[8], top: letter4[9] }}><Text>{pizza[3][4]}</Text></View>
                <View style={{ position: 'absolute', left: letter4[10], top: letter4[11] }}><Text>{pizza[3][5]}</Text></View>
                <View style={{ position: 'absolute', left: letter4[12], top: letter4[13] }}><Text>{pizza[3][6]}</Text></View>
                <View style={{ position: 'absolute', left: letter4[14], top: letter4[15] }}><Text>{pizza[3][7]}</Text></View>

                <View style={{ position: 'absolute', right: letter5[0], top: letter5[1] }}><Text>{pizza[4][0]}</Text></View>
                <View style={{ position: 'absolute', right: letter5[2], top: letter5[3] }}><Text>{pizza[4][1]}</Text></View>
                <View style={{ position: 'absolute', right: letter5[4], top: letter5[5] }}><Text>{pizza[4][2]}</Text></View>
                <View style={{ position: 'absolute', right: letter5[6], top: letter5[7] }}><Text>{pizza[4][3]}</Text></View>
                <View style={{ position: 'absolute', right: letter5[8], top: letter5[9] }}><Text>{pizza[4][4]}</Text></View>
                <View style={{ position: 'absolute', right: letter5[10], top: letter5[11] }}><Text>{pizza[4][5]}</Text></View>
                <View style={{ position: 'absolute', right: letter5[12], top: letter5[13] }}><Text>{pizza[4][6]}</Text></View>
                <View style={{ position: 'absolute', right: letter5[14], top: letter5[15] }}><Text>{pizza[4][7]}</Text></View>

                <View style={{ position: 'absolute', right: letter6[0], top: letter6[1] }}><Text>{pizza[5][0]}</Text></View>
                <View style={{ position: 'absolute', right: letter6[2], top: letter6[3] }}><Text>{pizza[5][1]}</Text></View>
                <View style={{ position: 'absolute', right: letter6[4], top: letter6[5] }}><Text>{pizza[5][2]}</Text></View>
                <View style={{ position: 'absolute', right: letter6[6], top: letter6[7] }}><Text>{pizza[5][3]}</Text></View>
                <View style={{ position: 'absolute', right: letter6[8], top: letter6[9] }}><Text>{pizza[5][4]}</Text></View>
                <View style={{ position: 'absolute', right: letter6[10], top: letter6[11] }}><Text>{pizza[5][5]}</Text></View>
                <View style={{ position: 'absolute', right: letter6[12], top: letter6[13] }}><Text>{pizza[5][6]}</Text></View>
                <View style={{ position: 'absolute', right: letter6[14], top: letter6[15] }}><Text>{pizza[5][7]}</Text></View>

                <View style={{ position: 'absolute', right: letter7[0], bottom: letter7[1] }}><Text>{pizza[6][0]}</Text></View>
                <View style={{ position: 'absolute', right: letter7[2], bottom: letter7[3] }}><Text>{pizza[6][1]}</Text></View>
                <View style={{ position: 'absolute', right: letter7[4], bottom: letter7[5] }}><Text>{pizza[6][2]}</Text></View>
                <View style={{ position: 'absolute', right: letter7[6], bottom: letter7[7] }}><Text>{pizza[6][3]}</Text></View>
                <View style={{ position: 'absolute', right: letter7[8], bottom: letter7[9] }}><Text>{pizza[6][4]}</Text></View>
                <View style={{ position: 'absolute', right: letter7[10], bottom: letter7[11] }}><Text>{pizza[6][5]}</Text></View>
                <View style={{ position: 'absolute', right: letter7[12], bottom: letter7[13] }}><Text>{pizza[6][6]}</Text></View>
                <View style={{ position: 'absolute', right: letter7[14], bottom: letter7[15] }}><Text>{pizza[6][7]}</Text></View>

                <View style={{ position: 'absolute', right: letter8[0], bottom: letter8[1] }}><Text>{pizza[7][0]}</Text></View>
                <View style={{ position: 'absolute', right: letter8[2], bottom: letter8[3] }}><Text>{pizza[7][1]}</Text></View>
                <View style={{ position: 'absolute', right: letter8[4], bottom: letter8[5] }}><Text>{pizza[7][2]}</Text></View>
                <View style={{ position: 'absolute', right: letter8[6], bottom: letter8[7] }}><Text>{pizza[7][3]}</Text></View>
                <View style={{ position: 'absolute', right: letter8[8], bottom: letter8[9] }}><Text>{pizza[7][4]}</Text></View>
                <View style={{ position: 'absolute', right: letter8[10], bottom: letter8[11] }}><Text>{pizza[7][5]}</Text></View>
                <View style={{ position: 'absolute', right: letter8[12], bottom: letter8[13] }}><Text>{pizza[7][6]}</Text></View>
                <View style={{ position: 'absolute', right: letter8[14], bottom: letter8[15] }}><Text>{pizza[7][7]}</Text></View>

            </View>
        )
    }
}