import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 8,
    width: 120,
    height: 120,
    marginHorizontal: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  infoText: {
    fontSize: 18,
    textAlign: "center",
  },
  infoNumber: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 24,
  },
});