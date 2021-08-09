import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((val) => val + 1);
  const decrement = () => setCounter((val) => val - 1);
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={increment}>
        <Text style={styles.signText}>{"+"}</Text>
      </Pressable>
      <Text style={styles.counter}>{counter}</Text>
      <Pressable style={styles.button} onPress={decrement}>
        <Text style={styles.signText}>{"-"}</Text>
      </Pressable>
    </View>
  );
}
export { Counter };
