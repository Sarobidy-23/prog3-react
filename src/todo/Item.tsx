import React from 'react';
import "./item.css";
import { itemPropType } from '../utils/typeUtils';

function Item(props: itemPropType) {
    const {element, onCheck, index} = props

    return (
        <div className='item-container'>
            {element.name}
            {!element.isDone && <input type="checkbox" onChange={()=>onCheck(index)}/>}
        </div>
    )
}

export default Item
