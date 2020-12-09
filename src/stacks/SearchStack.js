import React from "react"
import { Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

import SearchScreen from "../screens/SearchScreen"
import CameraScanScreen from "../screens/CameraScanScreen"
const Stack = createStackNavigator()

const SearchStack = (props) => {
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
        component={SearchScreen}
        options={{
          headerStyle: { height: 0 },
        }}
      />
      <Stack.Screen
        name="CameraScanScreen"
        component={CameraScanScreen}
        options={{ headerStyle: { height: 0 } }}
      />
    </Stack.Navigator>
  )
}

export default SearchStack
