import {
  SET_CURRENT_VALUE,
  SET_PREVIOUS_VALUE,
  SET_IS_PREVIOUS_RESULT,
  SET_OPERATION
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_VALUE:
      return {
        ...state,
        currentValue: action.payload
      };
    case SET_PREVIOUS_VALUE:
      return {
        ...state,
        prevValue: action.payload
      };
    case SET_IS_PREVIOUS_RESULT:
      return {
        ...state,
        isPrevResult: action.payload
      };
    case SET_OPERATION:
      return {
        ...state,
        operation: action.payload
      };
    default:
      return state;
  }
};
