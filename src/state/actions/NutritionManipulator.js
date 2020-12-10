import { ADD_FOODITEM_TO_DATE, INITIALIZE_FROM_STORAGE } from "../actions/types";
import { AsyncStorage } from "@react-native-community/async-storage";
const _storeDataToState = async (date, id) => {
    try {
        let existing = await _fetchData(date);
        existing = existing ? existing : [];
        existing.push(id);
        await AsyncStorage.setItem(date, JSON.stringify(existing));
    }
    catch (error) {
        // Error saving data
    }
};
const _fetchData = async (date) => {
    try {
        const value = await AsyncStorage.getItem(date);
        if (value !== undefined) {
            return JSON.parse(value);
        }
        else {
            return undefined;
        }
    }
    catch (error) {
        // Error retrieving data
    }
};
export const addFoodItem = (foodItem) => {
    return addFoodItemToDate(new Date(), foodItem);
};
export const addFoodItemToDate = (date, foodItem) => {
    return {
        type: ADD_FOODITEM_TO_DATE,
        payload: { date: date, toAdd: foodItem },
    };
};
export const initializeFromStorage = () => {
    const data = {};
    return { type: INITIALIZE_FROM_STORAGE, payload: { data: data } };
};
