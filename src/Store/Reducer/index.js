import {StartUp} from '../Actions';
const initialState = {
  Products: [],
  Categories: [],
  Cart: [],
  Order: {},
  User: {},
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case StartUp:
      return {...state, ...payload};
    default:
      return state;
  }
};
export default reducer;
