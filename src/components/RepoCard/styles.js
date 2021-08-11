import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  infoCardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  rightView: {
    marginStart: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
  },
  desc: {
    fontSize: 14,
    lineHeight: 24,
  },
});