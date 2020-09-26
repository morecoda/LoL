import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native-appearance";

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
  const scheme = useColorScheme();
  return (
    <PaperProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
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
      <StatusBar style={"auto"} />
    </PaperProvider>
  );
}
