import { SET_CURRENT_FOODITEM } from "../actions/types";
export const setCurrentSelectedItem = (foodItem) => {
    return { type: SET_CURRENT_FOODITEM, payload: { foodItem: foodItem } };
};
// return (dispatch) => {
//   const fetcher = new FetchFood()
//   const foodItem = await fetcher.getNutritionFromBarcode(upc).then(() => {})
//   dispatch({
//     type: SET_CURRENT_FOODITEM,
//     payload: { foodItem: foodItem },
//   })
// }
