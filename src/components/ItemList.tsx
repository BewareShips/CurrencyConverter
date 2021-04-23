import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/items';
import Item from './Item';
import {Currency} from '../types/item'

const ItemList  = () => {
  const dispatch = useDispatch();
  const { curItems, loading, error } = useTypedSelector(
    (state) => state.items
 );

  useEffect(() => {
    dispatch(fetchUsers());
 }, [dispatch]);
 console.log(curItems)
  return (
    <div>
      {/* {curItems.map((item) => (
            <Item
               key={item.ID}
               CharCode={item.CharCode}
               Nominal={item.Nominal}
               Value={item.Value}
               Previous={item.Previous}
               Name={item.Name}
            />
         ))} */}
      
    </div>
  )
}

export default ItemList
