import React from "react";
import { View, Text, StyleSheet } from "react-native";

import DrawerTrigger from "./DrawerTrigger";

class Header extends React.Component {
  render() {
    return(
      <View style={styles.header}>
        <DrawerTrigger />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 28,
    paddingBottom: 8,
    backgroundColor: "#CFCFCF"
  }
});

export default Header;
