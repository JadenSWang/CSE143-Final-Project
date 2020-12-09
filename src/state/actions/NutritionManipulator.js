import { ADD_FOODITEM_TO_DATE } from "../actions/types";
export const addFoodItem = (foodItem) => {
    return addFoodItemToDate(new Date(), foodItem);
};
export const addFoodItemToDate = (date, foodItem) => {
    return {
        type: ADD_FOODITEM_TO_DATE,
        payload: { date: date, toAdd: foodItem },
    };
};
