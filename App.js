import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Screens
import SummaryScreen from "./src/screens/SummaryScreen"

// Components
import TabBarIcon from "./src/components/TabBarIcon"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const SummaryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SummaryScreen"
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="SummaryScreen"
        component={SummaryScreen}
        options={{
          headerStyle: { height: 0 },
          title: "Focused List",
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SummaryStack" component={SummaryStack} options={{ title: "Summary", tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
