export type Currency = {
  CharCode: string;
  Name: string;
  Nominal: number;
  Value: number;
  Previous: number;
}

export type ItemState = {
  curItems: any[],
  loading: boolean,
  error: null | string;
};



export enum ItemActionTypes {
  FETCH_ITEMS = "FETCH_ITEMS",
  FETCH_iTEMS_SUCCESS = "FETCH_iTEMS_SUCCESS",
  FETCH_iTEMS_ERROR = "FETCH_iTEMS_ERROR"
}

export interface FetchItemAction {
  type: ItemActionTypes.FETCH_ITEMS;
}

export interface FetchItemSuccessAction {
  type: ItemActionTypes.FETCH_iTEMS_SUCCESS;
  payload: any[];
}

export interface FetchItemErrorAction {
  type: ItemActionTypes.FETCH_iTEMS_ERROR;
  payload: string;
}

export type ItemAction = FetchItemAction | FetchItemSuccessAction | FetchItemErrorAction;