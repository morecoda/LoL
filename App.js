import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";

import { NewsScreen } from "./screens/NewsScreen";
import { ESportsScreen } from "./screens/ESportsScreen";
import { MessagesScreen } from "./screens/MessagesScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ConfigurationsScreen } from "./screens/ConfigurationsScreen";

const RNDrawer = createDrawerNavigator();

const RNBottom = createBottomTabNavigator();

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Profile"
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      />
      <DrawerItem
        label="Configurations"
        onPress={() => {
          props.navigation.navigate("Configurations");
        }}
      />
    </DrawerContentScrollView>
  );
}

function BottomNavigator() {
  return (
    <RNBottom.Navigator>
      <RNBottom.Screen name="News" component={NewsScreen} />
      <RNBottom.Screen name="E-Sports" component={ESportsScreen} />
      <RNBottom.Screen name="Messages" component={MessagesScreen} />
    </RNBottom.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RNDrawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <RNDrawer.Screen name="Main" component={BottomNavigator} />
          <RNDrawer.Screen name="Profile" component={ProfileScreen} />
          <RNDrawer.Screen
            name="Configurations"
            component={ConfigurationsScreen}
          />
        </RNDrawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
