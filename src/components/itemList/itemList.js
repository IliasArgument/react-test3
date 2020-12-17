import React, {useState, useEffect} from 'react';
import Spinner from '../spinner/spinner';
import './itemList.css';

function ItemList ({getData, renderItem, onItemSelected}) {

   const [data, setDate] = useState([]);


   useEffect(() => {
       getData()
       .then((data) => {
           return setDate(data)
       })
   },[]);

const renderItems = (arr) => {
return arr.map((item)=> {
    const {id} = item;

    const label = renderItem(item);
    return (
        <li key={id}
        className="list-group-item"
        onClick={() => onItemSelected(id)}
        >
{label}
        </li>
    );
})
}
    
        
        if(!data) {
            return <Spinner/> 
        }
        const items = renderItems(data);
        return (
            <ul className="item-list list-group">
               {items}               
            </ul>
        );

}

export default ItemList;