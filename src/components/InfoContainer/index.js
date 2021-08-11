import React from "react";
import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

function InfoContainer({
  iconName,
  text,
  containerStyle,
  textStyle,
  iconColor,
  iconSize,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}

export { InfoContainer };