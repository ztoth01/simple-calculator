import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        msg: action.payload.msg,
        cssClass: action.payload.cssClass
      };
    case REMOVE_ALERT:
      return {
        msg: "",
        cssClass: "fadeOut"
      };
    default:
      return;
  }
};
