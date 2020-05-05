import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from "react-navigation";

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from "react-navigation-drawer";

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Ionicons
          name="md-reorder"
          size={24}
          color="grey"
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 15,
    borderRadius: 30,
    width: 38,
    height: 38,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default withNavigation(DrawerTrigger);

