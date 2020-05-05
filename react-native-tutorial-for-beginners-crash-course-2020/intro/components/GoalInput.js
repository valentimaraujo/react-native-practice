import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, onCancelGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredGoal => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  const cancelGoal = () => {
    onCancelGoal();
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelGoal} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 15,
    width: "80%",
    height: 36,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});


export default GoalInput;
