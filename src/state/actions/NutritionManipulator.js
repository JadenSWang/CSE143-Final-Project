import { ADD_FOODITEM_TO_DATE, INITIALIZE_FROM_STORAGE } from "../actions/types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodItem } from "../../classes/FoodItem";
import { getDayMonthYear } from "../reducers/helper";
const _storeDataToState = async (date, foodItem) => {
    try {
        let existing = await _fetchData(date);
        existing = existing ? existing : [];
        existing.push(foodItem);
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
    _storeDataToState(getDayMonthYear(date), foodItem.json);
    return {
        type: ADD_FOODITEM_TO_DATE,
        payload: { date: date, toAdd: foodItem },
    };
};
export const initializeFromStorage = () => {
    // AsyncStorage.clear()

    return (dispatch) => {
        const data = {};
        AsyncStorage.getAllKeys().then((keys) => {
            keys.map(async (date) => {
                if (data[date] == undefined) {
                    data[date] = [];
                }
                data[date].push(new FoodItem(await _fetchData(date)));
            });
            dispatch({ type: INITIALIZE_FROM_STORAGE, payload: { data: data } });
        });
    };
};
