import { ADD_FOODITEM_TO_DATE } from "../actions/types"
import { Payload } from "../actions/types"

export const addFoodItem = (foodItem): Payload => {
  return addFoodItemToDate(new Date(), foodItem)
}

export const addFoodItemToDate = (date: Date, foodItem): Payload => {
  return {
    type: ADD_FOODITEM_TO_DATE,
    payload: { date: date, toAdd: foodItem },
  }
}