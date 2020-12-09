export const ADD_FOODITEM_TO_DATE = "add_fooditem_to_date"
export const SET_CURRENT_FOODITEM = "set_current_fooditem"

export interface Payload {
    type: string;
    [key: string]: any;
}