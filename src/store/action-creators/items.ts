import { ItemActionTypes } from './../../types/item';
import axios from "axios";
import { Dispatch } from "redux";
import { ItemAction } from "../../types/item";


export const fetchUsers = () =>{
  return async (dispatch: Dispatch<ItemAction>) =>{
    try {
      dispatch({type: ItemActionTypes.FETCH_ITEMS})
      const {data} = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
      dispatch({type: ItemActionTypes.FETCH_iTEMS_SUCCESS,payload: Object.values(data.Valute)})
    } catch (e) {
      dispatch({ type: ItemActionTypes.FETCH_iTEMS_ERROR, payload: "Произошла ошибка при загрузке" });
    }
  }
}