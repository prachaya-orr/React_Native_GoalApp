/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View, Pressable} from 'react-native';
function GoalItem(props: any) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: 'red'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
