import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import ListScreen from "../screens/ListScreen"
const Stack = createStackNavigator()

const ListStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          headerStyle: { height: 0 },
          title: "Focused List",
        }}
      />
    </Stack.Navigator>
  )
}

export default ListStack
