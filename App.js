import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

const RNDrawer = createDrawerNavigator();

const RNBottom = createBottomTabNavigator();

const RNStack = createStackNavigator();

function News() {
  const NewsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>News Screen</Text>
      </View>
    );
  };
  return (
    <RNStack.Navigator>
      <RNStack.Screen name="News" component={NewsScreen} />
    </RNStack.Navigator>
  );
}

function ESports() {
  const ESportsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>E-Sports Screen</Text>
      </View>
    );
  };
  return (
    <RNStack.Navigator>
      <RNStack.Screen name="E-Sports" component={ESportsScreen} />
    </RNStack.Navigator>
  );
}

function Messages() {
  const MessagesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Messages Screen</Text>
      </View>
    );
  };
  return (
    <RNStack.Navigator>
      <RNStack.Screen name="Messages" component={MessagesScreen} />
    </RNStack.Navigator>
  );
}

function Profile() {
  const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  };
  return (
    <RNStack.Navigator>
      <RNStack.Screen
        name="Profile"
        component={ProfileScreen}
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
    </RNStack.Navigator>
  );
}

function Configurations() {
  const ConfigurationsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Configurations Screen</Text>
      </View>
    );
  };
  return (
    <RNStack.Navigator>
      <RNStack.Screen
        name="Configurations"
        component={ConfigurationsScreen}
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
    </RNStack.Navigator>
  );
}

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
      <RNBottom.Screen name="News" component={News} />
      <RNBottom.Screen name="E-Sports" component={ESports} />
      <RNBottom.Screen name="Messages" component={Messages} />
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
          <RNDrawer.Screen name="Profile" component={Profile} />
          <RNDrawer.Screen name="Configurations" component={Configurations} />
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
