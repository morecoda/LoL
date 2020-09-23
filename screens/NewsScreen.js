import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const NewsContent = () => {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  );
};

export const NewsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={NewsContent} />
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
