import { SET_CURRENT_FOODITEM } from "../actions/types";
import { FetchFood } from "../../classes/fetchData";
export const setCurrentSelectedItem = async (date, upc) => {
    const fetcher = new FetchFood();
    const toAdd = await fetcher.getNutritionFromBarcode(upc);
    console.log(toAdd);
    return {
        type: SET_CURRENT_FOODITEM,
        payload: { date: date, toAdd: toAdd },
    };
};
