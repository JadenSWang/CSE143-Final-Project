import { SET_CURRENT_FOODITEM } from "../actions/types"
import { Payload } from "../actions/types"

import { FetchFood } from "../../classes/fetchData"
import { FoodItem } from "../../classes/FoodItem"

export const setCurrentSelectedItem = (foodItem: FoodItem) => {
  return { type: SET_CURRENT_FOODITEM, payload: { foodItem: foodItem } }
}

// return (dispatch) => {
//   const fetcher = new FetchFood()
//   const foodItem = await fetcher.getNutritionFromBarcode(upc).then(() => {})

//   dispatch({
//     type: SET_CURRENT_FOODITEM,
//     payload: { foodItem: foodItem },
//   })
// }
