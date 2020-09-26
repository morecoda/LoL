import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

const ConfigurationsContent = () => {
  return (
    <View style={styles.container}>
      <Text>Configurations Screen</Text>
    </View>
  );
};

export const ConfigurationsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Configurations"
        component={ConfigurationsContent}
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
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
