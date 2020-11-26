import * as React from "react"
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native"
import { FetchFood } from "../classes/fetchData"

// state
import { connect } from "react-redux"
import { addFoodItem } from "../state/actions";


const SearchScreen = (props) => {
  const [barcodeInputValue, setBarcodeInputValue] = React.useState()
  const [keywordInputValue, setKeywordInputValue] = React.useState()

  const [foodItem, setFoodItem] = React.useState();
  const dataFetcher = new FetchFood();

  React.useEffect(() => {

  }, [])

  return (
    <>
      <View style={styles.container}>
        <Text>Barcode Search</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderBottomWidth: 1, width: 100 }}
          onChangeText={(text) => setBarcodeInputValue(text)}
          value={barcodeInputValue}
        />
        <Button title={"Search"} onPress={async () => {
          const data = await dataFetcher.getNutritionFromBarcode(keywordInputValue)
          setFoodItem(data);
        }}/>
        <Text>Keyword Search</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderBottomWidth: 1, width: 100 }}
          onChangeText={(text) => setKeywordInputValue(text)}
          value={keywordInputValue}
        />
        <Button title={"Search"} onPress={async () => {
          const data = await dataFetcher.getFirstNutritionFromKeyword(keywordInputValue)
          setFoodItem(data);
        }}/>
        {foodItem != undefined ? <Text>{"Category:" + foodItem.getCategory()}</Text> : <></>}
        {foodItem != undefined ? <Text>{"Label:" + foodItem.getLabel()}</Text> : <></>}
        {foodItem != undefined ? <Text>{"Calories:" + foodItem.getCalories()}</Text> : <></>}
        {foodItem != undefined ? <Image source={{uri: foodItem.getImage()}} style = {{height: 200, width: 200, resizeMode: 'stretch', margin: 5 }} /> : <></>}
        <Button title={"Add This Item"} onPress={() => {
          if(foodItem != undefined) {
            props.addFoodItem(foodItem);
          }
        }}/>
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
    today: []
	};
};

export default connect(mapStateToProps, {
  addFoodItem
})(SearchScreen);
