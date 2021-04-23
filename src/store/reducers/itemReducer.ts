import { ItemState , ItemAction, ItemActionTypes, } from '../../types/item';



const initialState: ItemState = {
  curItems: [],
  loading: false,
  error: null
};


export const itemReducer = (state = initialState, action: ItemAction) => {
  switch (action.type) {
    case ItemActionTypes.FETCH_ITEMS:
      return{...state, loading: true}
    case ItemActionTypes.FETCH_iTEMS_SUCCESS:
      return {...state,loading:false,curItems: action.payload}
    case ItemActionTypes.FETCH_iTEMS_SUCCESS:
      return {...state,loading:false,error:action.payload}
    default:
      return state
  }
};