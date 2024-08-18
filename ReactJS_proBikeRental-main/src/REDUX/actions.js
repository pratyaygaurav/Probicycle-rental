import { states } from "./states";

export const action_showAlert = (text) => {

    const data = {
        type: states.SHOW_ALERT,
        payload: true
    };

    return (dispatch) => {
        return Promise.resolve(dispatch(data)).then(() => {
            dispatch(action_txtAlert(text));
        });
    };
}

export const action_hideAlert = () => {

    const data = {
        type: states.HIDE_ALERT,
        payload: null
    };

    return (dispatch) => {
        return Promise.resolve(dispatch(data)).then(() => {
            dispatch(action_txtAlert(""));
        });
    };
}

const action_txtAlert = (text) => {

    const data = {
        type: states.TXT_ALERT,
        payload: text
    };

    return data;
}

export const action_getData = (obj) => {
    const data = {
        type: states.GET_DATA,
        payload: obj
    };

    return (dispatch) => {
        return Promise.resolve(dispatch(data)).then(() => {
            dispatch(action_hideAlert());
        });
    };
}

export const action_resetData = () => {
    const data = {
        type: states.RESET_DATA
    };

    return (dispatch) => {
        dispatch(data);
    }
}

export const action_inputValues = (obj) => {

    const data = {
        type: states.INPUT_VALUES,
        payload: obj
    };

    return (dispatch) => {
        dispatch(data);
    }
}
