import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, Modal, TextInput } from "react-native";
import store from "../stores/index.js";

export default class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      modalVisible2: false,
      modalVisible3: false,
      heightTxt: '23',
      weightTxt: '40',
      rankTxt: '13',
    };

    this.setup = this.setup.bind(this);
    this.back = this.back.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.setModalVisible2 = this.setModalVisible2.bind(this);
    this.setModalVisible3 = this.setModalVisible3.bind(this);
  }

  back() {
    store.pageNav.setPage("home");
  }

  setup() {
    store.pageNav.setPage("setupAuthy");
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setModalVisible2(visible) {
    this.setState({ modalVisible2: visible });
  }

  setModalVisible3(visible) {
    this.setState({ modalVisible3: visible });
  }

  render() {
    let bgcolor = "#ff0000";
    is_registered = store.pageNav.is_registered;
    if (is_registered) {
      bgcolor = "green";
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 25 }}></View>
        <View style={{ width: 100 }}>
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "#DDDDDD"
            }}
            onPress={this.back}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome name="user-circle-o" size={100} color="grey" />
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: bgcolor
            }}
            onPress={this.setup}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
              Setup Authentication
            </Text>
          </TouchableOpacity>
          <Text>Details</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text>Edit Height</Text>
                  <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    placeholder="Type your new height"
                    onChangeText={heightTxt => this.setState({heightTxt})}
                    value={this.state.heightTxt}
                  />
                  <TouchableOpacity
                  style={{
                    margin: 10,
                    padding: 10,
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#DDDDDD"
                  }}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View>
              <Text>Height: {this.state.heightTxt} </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  padding: 10,
                  alignItems: "center",
                  backgroundColor: "white"
                }}
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <FontAwesome name="edit" size={20} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible2}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text>Edit Weight</Text>
                  <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    placeholder="Type your new weight"
                    onChangeText={weightTxt => this.setState({weightTxt})}
                    value={this.state.weightTxt}
                  />
                  <TouchableOpacity
                  style={{
                    margin: 10,
                    padding: 10,
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#DDDDDD"
                  }}
                    onPress={() => {
                      this.setModalVisible2(!this.state.modalVisible2);
                    }}
                  >
                    <Text>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View>
              <Text>Weight: {this.state.weightTxt} </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  padding: 10,
                  alignItems: "center",
                  backgroundColor: "white"
                }}
                onPress={() => {
                    this.setModalVisible2(true);
                  }}
              >
                <FontAwesome name="edit" size={20} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible3}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View>
                  <Text>Edit Rank</Text>
                  <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    placeholder="Type your new rank"
                    onChangeText={rankTxt => this.setState({rankTxt})}
                    value={this.state.rankTxt}
                  />
                  <TouchableOpacity
                  style={{
                    margin: 10,
                    padding: 10,
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#DDDDDD"
                  }}
                    onPress={() => {
                      this.setModalVisible3(!this.state.modalVisible3);
                    }}
                  >
                    <Text>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View>
              <Text>Rank: {this.state.rankTxt} </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  padding: 10,
                  alignItems: "center",
                  backgroundColor: "white"
                }}
                onPress={() => {
                    this.setModalVisible3(true);
                  }}
              >
                <FontAwesome name="edit" size={20} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
