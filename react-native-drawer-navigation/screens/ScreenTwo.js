import React from "react";
import { View, StyleSheet } from "react-native";

import ScreenName from "../components/ScreenName";

import Header from "../components/Header";

export default class ScreeTwo extends React.Component {
  static navigationOptions = {}

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <ScreenName name={'Screen Two'} />
        </View>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
