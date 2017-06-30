import actionTypes from '@constants/actionTypes';

export default function (state = {}, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      console.log(2);
      return Object.assign({}, state, {counter:1});
    case actionTypes.REQUEST_ITEM_BEGIN:
    case actionTypes.REQUEST_ITEM_SUCCESS:
    case actionTypes.REQUEST_ITEM_FAILURE:
      return Object.assign({}, state, {
        data: action.payload
      })
    default:
      return state;
  }
}