import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                        {/* Value must update every time new item is added */}
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>

                )}
                decimalScale={2}
                // Value must update every time new item is added
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator = {true}
                prefix={'$'}
            />

            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
