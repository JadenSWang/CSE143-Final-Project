import { SET_CURRENT_FOODITEM } from "../actions/types"
import { Payload } from "../actions/types"

import { FetchFood } from "../../classes/fetchData"

export const setCurrentSelectedItem = async (
  date: Date,
  upc: string
): Promise<Payload> => {
  const fetcher = new FetchFood()
  const toAdd = await fetcher.getNutritionFromBarcode(upc)

  return {
    type: SET_CURRENT_FOODITEM,
    payload: { date: date, toAdd: toAdd },
  }
}
