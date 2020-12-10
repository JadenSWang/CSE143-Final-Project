import * as React from "react"
import { StyleSheet, View, Text, Image} from "react-native"
import { Card, ListItem, Button, Icon } from "react-native-elements"

var imageURI =
  "http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"

const ListScreen = () => {
  React.useEffect(() => {}, [])
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{ uri: imageURI }}
          style={{ width: "200px", height: "200px" }}
        />
        <Image
          source={require("./images/pic.png")}
          style={{ width: "200px", height: "200px" }}
        />
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: imageURI }}/>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
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

export default ListScreen
