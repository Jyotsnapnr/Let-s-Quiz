import {
    CHANGE_NUMBER,
    CHANGE_SCORE,
    CHANGE_CATEGORY,
    CHANGE_TYPE,
    CHANGE_DIFFICULTY
} from "./actionTypes";

const initialState = {
    question_category: "", 
    question_difficulty: "",
    question_type: "",
    number_of_questions: 30,
    score: 0
}


const reducer = (state = initialState, action) => {

switch(action.type) {
    case CHANGE_CATEGORY:
        return { 
            ...state,
            question_category:action.payload,
        };
        case CHANGE_DIFFICULTY:
            return {
                ...state,
                question_difficulty: action.payload,
            };
            case CHANGE_TYPE:
                return {
                    ...state,
                    question_type: action.payload,
                };
                case CHANGE_NUMBER:
                    return {
                        ...state,
                        number_of_questions: action.payload,
                    };
                    case CHANGE_SCORE: 
                    return {
                        ...state,
                        score: action.payload,
                    };
                    default:
                        return state;
}
}
export default reducer;