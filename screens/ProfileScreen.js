import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProfileContent = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileContent}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
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
