import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ title, onDelete, uid }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, uid)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#CCC",
    borderColor: "black",
    borderWidth: 1
  }
});
export default GoalItem;
