import { combineReducers } from "redux"

import NutritionManipulatorReducer from "./NutritionManipulatorReducer"
import CurrentSelectedItemReducer from "./CurrentSelectedItemReducer"

export default combineReducers({
  nutritionManipulator: NutritionManipulatorReducer,
  foodItem: CurrentSelectedItemReducer,
})
