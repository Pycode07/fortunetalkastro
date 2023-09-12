import * as ActionType from './ActionType';

const initialState = {
  appData: 'Hello',
 
};

const customer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ActionType.AppData:
      return {
        ...state,
        AppData: payload,
      };
  
    default:
      return state;
  }
};

export default customer;
