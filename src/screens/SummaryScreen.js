const data = [
  {
     name: 'Hotdog',
     avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1200px-Hotdog_-_Evan_Swigart.jpg',
     calories: 500,
  },
  {
    name: 'Hamburger',
    avatar: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
    calories: 1000,
  },
  {
    name: 'Salad',
    avatar:   'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/salad.jpg',
    calories: 200,
  },
  {
    name: 'Pad Thai',
    avatar:   'https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg',
    calories: 400,
  },
  {
    name: 'Kalua Pork',
    avatar:   'https://www.cookingclassy.com/wp-content/uploads/2020/05/kalua-pork-1.jpg',
    calories: 600,
  },
 ]

import * as React from "react"
import { StyleSheet, View } from "react-native"
import { Text, Card, ListItem, Header, Button, Icon} from 'react-native-elements'

var weeklyCalorieCount = 0; 
data.map(function(item, key) {
  var newItem = item;
  weeklyCalorieCount += newItem.calories;
});

const SummaryScreen = () => {
  React.useEffect(() => {}, [])
  return (
    <>
      <Header
        centerComponent={{ text: 'CalTrack - Everyday Calorie Tracker', style: { color: '#fff' } }}
      />
      <View style={styles.container}>
        {/* Weekly Summary */}
        <Card containerStyle={styles.card}>
          <Card.Title>🍽️ Weekly Calorie Count</Card.Title>
          <Card.Divider/>
          <Text h3 style={styles.h3}>
            {weeklyCalorieCount}
          </Text>
          <Text style={styles.subtitleText}>
            kcal
          </Text>
        </Card>
        {/* Most Recent Eats */}
        <Card containerStyle={styles.card}>
          <Card.Title>🍳 Your 5 Most Recent Eats</Card.Title>
          <Card.Divider/>
            {
              data.map((u, i) => {
                var calories = u.calories
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    subtitle={"Calories: " + calories}
                    leftAvatar={{ source: { uri: u.avatar } }}
                  />
                );
              })
            }
        </Card>
      </View>
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

export default SummaryScreen
