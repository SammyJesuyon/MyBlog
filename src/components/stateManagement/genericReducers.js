import {commentTriggerAction, Textaction} from "./actions";


export const textState = {
    textValue: 2,
};

export const commentTriggerState = {
    commentTrigger: true,
};

export const textReducer = (state, action) => {
    if (action.type === Textaction){
        return {
            ...state,
            textValue: action.payload,
        };
    }
    return state;
};

export const commentTriggerReducer = (state, action) => {
    if (action.type === commentTriggerAction){
        return {
            ...state,
            textValue: action.payload,
        };
    }
    return state;
};