import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function Section({ text, containerStyle, textStyle, children }) {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={[styles.header, textStyle]}>{text}</Text>
      <View style={styles.border} />
      {children}
    </View>
  );
}

export { Section };