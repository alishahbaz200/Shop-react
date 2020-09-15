import React from 'react'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import "./card-icon.style.scss"
import  toggleCartHidden  from '../../redux/cart/card.action'


function CardIcon({toggleCartHidden}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CardIcon)
