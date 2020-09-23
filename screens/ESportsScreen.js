import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ESportsContent = () => {
  return (
    <View style={styles.container}>
      <Text>E-Sports Screen</Text>
    </View>
  );
};

export const ESportsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="E-Sports" component={ESportsContent} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
