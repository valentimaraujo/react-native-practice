import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = title => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { uid: Math.random().toString(), value: title }
    ]);

    setIsAddMode(false);
  };

  const onCancel = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals =>
      currentGoals.filter(goal => goal.uid !== goalId)
    )
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAddMode(!isAddMode)} />
      <GoalInput onAddGoal={addGoalHandler} onCancelGoal={onCancel} visible={isAddMode} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            uid={itemData.item.uid}
            onDelete={removeGoalHandler} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
