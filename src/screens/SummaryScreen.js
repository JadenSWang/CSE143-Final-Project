import * as React from "react"
import { StyleSheet, View, Text } from "react-native"

// state
import { connect } from "react-redux"
import { initializeFromStorage } from "../state/actions"
import { AsyncStorage } from "react-native"

const SummaryScreen = (props) => {
  React.useEffect(() => {
    // AsyncStorage.clear();
    props.initializeFromStorage()
  }, [])

  return (
    <>
      <View style={styles.container}>
        <Text>Hello There, Welcome to the Summary Screen</Text>
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
    history: state.nutritionManipulator,
  }
}

export default connect(mapStateToProps, {
  initializeFromStorage,
})(SummaryScreen)
