import React, { createContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Links from "./components/Links.js";
import store from "./stores/index.js";

const GlobalStore = createContext(store);

export default function App() {

  return (
    <View style={styles.container}>
      <GlobalStore.Provider>
        <Links />
      </GlobalStore.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})