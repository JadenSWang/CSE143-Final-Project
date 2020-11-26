import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import SearchScreen from "../screens/SearchScreen"
const Stack = createStackNavigator()

const SearchStack = () => {
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
          title: "Focused List",
        }}
      />
    </Stack.Navigator>
  )
}

export default SearchStack
