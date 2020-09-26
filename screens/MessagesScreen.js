import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MessagesContent = () => {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
};

export const MessagesScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesContent} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
