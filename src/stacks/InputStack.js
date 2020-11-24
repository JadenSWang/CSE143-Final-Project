import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import InputScreen from "../screens/InputScreen"
const Stack = createStackNavigator()

const InputStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="InputScreen"
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="InputScreen"
        component={InputScreen}
        options={{
          headerStyle: { height: 0 },
          title: "Focused List",
        }}
      />
    </Stack.Navigator>
  )
}

export default InputStack
