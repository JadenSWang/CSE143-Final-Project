import { SET_CURRENT_FOODITEM } from "../actions/types"

import { FoodItem } from "../../classes/FoodItem"

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_FOODITEM: {
      return action.payload.foodItem
    }

    default:
      return state
  }
}
