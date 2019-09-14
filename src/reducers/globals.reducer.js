import {
  GLOBALS_APP_CONFIG
} from "../lib/types";


const initialState = {
  config: {
    appName: 'Docker-React Template'
  }
};

export const globalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALS_APP_CONFIG:
      return {
        ...state,
        config: action.payload
      };
    default:
      return state;
  }
};