import * as React from "react"
import { StyleSheet, View, Text } from "react-native"

const InputScreen = () => {
  React.useEffect(() => {}, [])
  return (
    <>
      <View style={styles.container}>
        <Text>Hello There, Welcome to the Input Screen</Text>
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
