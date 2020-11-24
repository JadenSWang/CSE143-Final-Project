import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import SummaryScreen from "../screens/SummaryScreen"
const Stack = createStackNavigator()

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

export default SummaryStack
