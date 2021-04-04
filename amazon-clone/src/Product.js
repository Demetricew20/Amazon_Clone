import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>Product Description</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
            </div>
        </div>
    )
}

export default Product
