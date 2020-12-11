import * as React from "react"
import { StyleSheet, View } from "react-native"
import { Text, Card, ListItem, Header } from "react-native-elements"
import { getDayMonthYear } from "../state/reducers/helper"

// state
import { connect } from "react-redux"
import { initializeFromStorage } from "../state/actions"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodItem } from "../classes/FoodItem"

const SummaryScreen = (props) => {
  React.useEffect(() => {
    // AsyncStorage.clear();
    props.initializeFromStorage() 
  }, [])

  const [weeklyCalorieCount, setWeeklyCalorieCount] = React.useState(0);

  const newData = props.history[getDayMonthYear(new Date())]
  React.useEffect(() => {
    if (newData !== undefined) {
      let calorieCount = 0;
      newData.map(function (item) {
        calorieCount += item.getCalories();
      })
      setWeeklyCalorieCount(calorieCount);
    }
  }, [props.history])




  return (
    <>
      <Header
        centerComponent={{
          text: "CalTrack - Everyday Calorie Tracker",
          style: { color: "#fff" },
        }}
      />
      {newData === undefined? <></>:
            <View style={styles.container}>
            {/* Weekly Summary */}
            <Card containerStyle={styles.card}>
              <Card.Title>🍽️ Weekly Calorie Count</Card.Title>
              <Card.Divider />
              <Text h3 style={styles.h3}>
                {weeklyCalorieCount}
              </Text>
              <Text style={styles.subtitleText}>kcal</Text>
            </Card>
            {/* Most Recent Eats */}
            <Card containerStyle={styles.card}>
              <Card.Title>🍳 What You Ate Today </Card.Title>
              <Card.Divider />
              {newData.map((u, i) => {
                var calories = u.getCalories()
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.getLabel()}
                    subtitle={"Calories: " + calories}
                    leftAvatar={{ source: { uri: u.getImage() } }}
                  />
                )
              })}
            </Card>
          </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
  },
  h3: {
    textAlign: "center",
  },
  subtitleText: {
    textAlign: "center",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

const mapStateToProps = (state) => {
  return {
    history: state.nutritionManipulator,
  }
}

export default connect(mapStateToProps, {
  initializeFromStorage,
})(SummaryScreen)
