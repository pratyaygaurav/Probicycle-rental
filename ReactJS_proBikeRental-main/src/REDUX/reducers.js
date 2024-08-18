import { states } from "./states";
import { combineReducers } from "redux";

const state_init_alert = {
    isAlert: null,
    txt_alert: ""
};

const state_init_data = {
    get_data: [],
};

const state_init_input_values = {
    input_data: {
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    }
};

const alertReducer = (state = state_init_alert, action) => {

    switch (action.type) {

        case states.SHOW_ALERT:
            return {
                ...state,
                isAlert: action.payload
            };

        case states.HIDE_ALERT:
            return {
                ...state,
                isAlert: null
            };

        case states.TXT_ALERT:
            return {
                ...state,
                txt_alert: action.payload
            }

        default:
            return state;
    }
}

const dataReducer = (state = state_init_data, action) => {

    switch (action.type) {
        case states.GET_DATA:

            localStorage.removeItem("data_bike_storage");
            
            return {
                ...state,
                get_data: action.payload ,
              
            };
        case states.RESET_DATA:
            return {
                ...state,
                get_data: []
            };

        default:
            return state;
    }
}


const inputReducer = (state = state_init_input_values, action) => {

    switch (action.type) {

        case states.INPUT_VALUES:
            return {
                ...state,
                input_data: action.payload
            };

        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    state_data: dataReducer,
    state_alert: alertReducer,
    state_input: inputReducer
});
