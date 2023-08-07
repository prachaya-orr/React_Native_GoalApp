import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import {StatusBar} from 'react-native';
import {useState} from 'react';
import uuid from 'react-native-uuid';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([] as any[]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText: any) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: uuid.v4(),
      },
    ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#ab74f3"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={item => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
