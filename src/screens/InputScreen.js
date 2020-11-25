import * as React from "react"
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native"

const InputScreen = () => {
  const [barcodeInputValue, setBarcodeInputValue] = React.useState()
  const [keywordInputValue, setKeywordInputValue] = React.useState()

  const [foodItem, setFoodItem] = React.useState();

  React.useEffect(() => {
  }, [])

  const getNutritionFromBarcode = (upc) => {
    const app_id = "37258125"
    const app_key = "523ab7a940442e6dbcee45599240648f"
    const url = "https://api.edamam.com/api/food-database/v2/parser?app_id={app_id}&app_key={app_key}&upc={upc}";

    fetch(url.replace("{app_id}", app_id).replace("{app_key}", app_key).replace("{upc}", upc))
      .then((response) => response.json())
      .then((json) => {
        setFoodItem(json)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getNutritionFromKeyword = (ingr) => {
    const app_id = "37258125"
    const app_key = "523ab7a940442e6dbcee45599240648f"
    const url = "https://api.edamam.com/api/food-database/v2/parser?app_id={app_id}&app_key={app_key}&ingr={ingr}";

    fetch(url.replace("{app_id}", app_id).replace("{app_key}", app_key).replace("{ingr}", ingr))
      .then((response) => response.json())
      .then((json) => {
        setFoodItem(json)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Barcode Search</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderBottomWidth: 1, width: 100 }}
          onChangeText={(text) => setBarcodeInputValue(text)}
          value={barcodeInputValue}
        />
        <Button title={"Search"} onPress={() => {getNutritionFromBarcode(barcodeInputValue)}}></Button>
        <Text>Keyword Search</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderBottomWidth: 1, width: 100 }}
          onChangeText={(text) => setKeywordInputValue(text)}
          value={keywordInputValue}
        />
        <Button title={"Search"} onPress={() => {getNutritionFromKeyword(keywordInputValue)}}></Button>
        {foodItem != undefined ? <Text>{"Category:" + foodItem.hints[0].food.category}</Text> : <></>}
        {foodItem != undefined ? <Text>{"Label:" + foodItem.hints[0].food.label}</Text> : <></>}
        {foodItem != undefined ? <Text>{"Image SRC:" + foodItem.hints[0].food.image}</Text> : <></>}
        {foodItem != undefined ? <Image source={{uri: foodItem.hints[0].food.image}} style = {{height: 200, width: 200, resizeMode: 'stretch', margin: 5 }} /> : <></>}
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

export default InputScreen
