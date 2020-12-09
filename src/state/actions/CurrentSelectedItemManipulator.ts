import { SET_CURRENT_FOODITEM } from "../actions/types"
import { Payload } from "../actions/types"

import { FetchFood } from "../../classes/fetchData"
import { FoodItem } from "../../classes/FoodItem"

export const setCurrentSelectedItem = (foodItem: FoodItem) => {
  return { type: SET_CURRENT_FOODITEM, payload: { foodItem: foodItem } }
}

export const setCurrentSelectedItemByKeyword = (keyword: string) => {
  return (dispatch) => {
    new FetchFood().getFirstNutritionFromKeyword(keyword).then((foodItem) => {
      dispatch(setCurrentSelectedItem(foodItem))
    })
  }
}

export const setCurrentSelectedItemByUpc = (upc: string) => {
  return (dispatch) => {
    new FetchFood().getFirstNutritionFromBarcode(upc).then((foodItem) => {
      dispatch(setCurrentSelectedItem(foodItem))
    })
  }
}

// return (dispatch) => {
//   const fetcher = new FetchFood()
//   const foodItem = await fetcher.getNutritionFromBarcode(upc).then(() => {})

//   dispatch({
//     type: SET_CURRENT_FOODITEM,
//     payload: { foodItem: foodItem },
//   })
// }
