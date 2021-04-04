import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>Product Description</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div class='product__rating'>
                    <p>&#11088;</p>
                </div>
            </div>

            <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt='' />
            <button>Add To Basket</button>
        </div>
    )
}

export default Product
