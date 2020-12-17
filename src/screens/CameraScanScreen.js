import * as React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { Header } from "react-native-elements"
import { BarCodeScanner } from "expo-barcode-scanner"
import { usePermissions } from "expo-permissions"

// state
import { connect } from "react-redux"
import { setCurrentSelectedItemByUpc } from "../state/actions"

const CameraScanScreen = (props) => {
  const [hasPermission, setHasPermission] = React.useState(false)
  const [scanned, setScanned] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])

  const handleBarCodeScanned = ({ _, data }) => {
    // add the data
    setScanned(true)
    props.setCurrentSelectedItemByUpc(data)
    props.navigation.pop()
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <>
      <Header
        containerStyle={{ backgroundColor: "white" }}
        leftComponent={
          <Button
            title="Back"
            onPress={() => {
              props.navigation.pop()
            }}
          />
        }
      />
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          barCodeTypes={[
            BarCodeScanner.Constants.BarCodeType.ean13,
            BarCodeScanner.Constants.BarCodeType.upc_e,
          ]}
          onBarCodeScanned={scanned ? () => {} : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    </>
  )
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { setCurrentSelectedItemByUpc })(
  CameraScanScreen
)
