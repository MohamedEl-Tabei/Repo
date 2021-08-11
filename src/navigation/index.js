import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './../screens/Home/idex';
import RepoScreen from './../screens/RepoScreen/index';

const { Screen, Navigator } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={"Home"}
        screenOptions={{
          header: () => null,
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <Screen name={"Repo"} component={RepoScreen} />
        <Screen name={"Home"} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;