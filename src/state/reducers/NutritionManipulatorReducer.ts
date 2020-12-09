import { ADD_FOODITEM_TO_DATE } from "../actions/types"
import { cloneDeep } from "lodash"

import { getDayMonthYear } from "./helper"

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FOODITEM_TO_DATE: {
      const newState = cloneDeep(state)
      const day = getDayMonthYear(action.payload.date);

      if (newState[day] == undefined) {
        newState[day] = [action.payload.toAdd]
      } else {
        newState[day].push(action.payload.toAdd)
      }

      return newState
    }

    default:
      return state
  }
}
