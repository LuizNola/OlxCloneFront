import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from './styled'


export default (props) => {
    let price = '';

    if (props.data.priceNegotiable){
        price = 'Preço a negociar!'
    }else{
        price = `R$ ${props.data.price}`
    }
return (
    <Item className="AdItem">
        <Link to={`/ad/${props.data.id}`}>
            <div className="item-image">
                <img src={props.data.image}/>
            </div>
            <div className="item-name">{props.data.title}</div>
            <div className="item-price">{price}</div>
        </Link>
    </Item>
    )
}
