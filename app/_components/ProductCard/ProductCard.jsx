import React from 'react'
import './ProductCard.css';
const ProductCard = ({filterActive, item}) => {
    // console.log(item)
    return (
        <div className={`product_card ${filterActive ? 'active' : ''}`}>
            <div className="card_top">
                <img src={item.image} alt="" />
            </div>
            <div className="card_bottom">
                <h4>{item.title}</h4>
                <div className="details">
                    <p><span>Sign In</span> or Create an account to see pricing</p>
                    <img src={'/like.png'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard