import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Stacks
import SummaryStack from "./src/stacks/SummaryStack"
import SearchStack from "./src/stacks/SearchStack"

// Components
import TabBarIcon from "./src/components/TabBarIcon"

// State
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/state/reducers";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="SummaryStack">
          <Tab.Screen
            name="SummaryStack"
            component={SummaryStack}
            options={{
              title: "Summary",
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name="md-pie" />
              ),
            }}
          />
          <Tab.Screen
            name="InputStack"
            component={SearchStack}
            options={{
              title: "Input",
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name="md-search" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
