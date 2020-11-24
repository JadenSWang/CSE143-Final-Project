import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Stacks
import SummaryStack from "./src/stacks/SummaryStack"
import InputStack from "./src/stacks/InputStack"

// Components
import TabBarIcon from "./src/components/TabBarIcon"

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="SummaryStack">
        <Tab.Screen
          name="SummaryStack"
          component={SummaryStack}
          options={{
            title: "Summary",
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pie" />,
          }}
        />
        <Tab.Screen
          name="InputStack"
          component={InputStack}
          options={{
            title: "Input",
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-create" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
