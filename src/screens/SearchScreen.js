import * as React from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button as ReactButton,
} from "react-native"
import { Card, Button, ListItem, Icon } from "react-native-elements"

// state
import { connect } from "react-redux"
import { addFoodItem, setCurrentSelectedItemByKeyword } from "../state/actions"

const SearchScreen = (props) => {
  const [keywordInputValue, setKeywordInputValue] = React.useState("Pineapple")

  const foodItem = props.foodItem

  React.useEffect(() => {}, [])

  const upperFirst = (word) =>
    word.charAt(0).toUpperCase() + word.substring(1, word.length)

  return (
    <>
      <View style={styles.container}>
        <Text>Keyword Search</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderBottomWidth: 1,
            width: 100,
          }}
          onChangeText={(text) => setKeywordInputValue(text)}
          value={keywordInputValue}
        />
        <ReactButton
          title={"Search"}
          onPress={() => {
            if (keywordInputValue != "") {
              props.setCurrentSelectedItemByKeyword(keywordInputValue)
            }
          }}
        />
        <ReactButton
          title={"Scan"}
          onPress={() => {
            props.navigation.push("CameraScanScreen", {})
          }}
        />
        {foodItem != undefined ? (
          <>
            <Card
              containerStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: "40%",
              }}
            >
              <Card.Title>{upperFirst(foodItem.getLabel())}</Card.Title>
              <Card.Divider />
              <Card.Image
                source={{ uri: foodItem.getImage() }}
                style={{
                  width: 200,
                  height: 200,
                }}
              />
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                style={{ marginTop: 10 }}
                buttonStyle={{
                  borderRadius: 4,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                onPress={() => props.addFoodItem(foodItem)}
                title="Add to List"
              />
            </Card>
            <Card
              containerStyle={{
                display: "flex",
                alignItems: "center",
                width: "90%",
                height: "20%",
              }}
            >
              {foodItem.getNutrients().map((nutritionItem, i) => {
                return (
                  <ListItem key={i}>
                    <ListItem.Subtitle style={{ fontSize: 13, marginTop: -20 }}>
                      {nutritionItem.getName() +
                        ": " +
                        nutritionItem.getValue()}
                    </ListItem.Subtitle>
                  </ListItem>
                )
              })}
            </Card>
          </>
        ) : (
          <></>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

const mapStateToProps = (state) => {
  return {
    today: [],
    foodItem: state.foodItem,
  }
}

export default connect(mapStateToProps, {
  addFoodItem,
  setCurrentSelectedItemByKeyword,
})(SearchScreen)
