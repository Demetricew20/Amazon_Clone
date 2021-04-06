import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/prime/2021_GTM/US2021D1155_GW_DesktopHero_1500x600_EN._CB659228198_.jpg' alt='' />

                <div className='home__row'>
                    <Product 
                    id='12341234' 
                    title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                    price={29.99}  
                    rating={5} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' />

                    <Product 
                    id='49538094'
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    price={239.0} 
                    rating={4} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'/>
                </div>

                <div className='home__row'>
                    <Product 
                    id='6849452' 
                    title="Green Toys Tractor Vehicle, Orange" 
                    price={19.99}  
                    rating={5} 
                    image='https://images-na.ssl-images-amazon.com/images/I/61ZIl4DjRDL._AC_SL1000_.jpg' />
                    
                    <Product 
                    id='2354679' 
                    title="Audio-Technica ATH-G1 Premium Gaming Headset" 
                    price={169.0}  
                    rating={4} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81PsISbkuzL._AC_SL1500_.jpg' />

                    <Product 
                    id='7659882' 
                    title="2020 Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Silver (4th Generation)" 
                    price={1249.99}  
                    rating={5} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg' />
                </div>

                <div className='home__row'>
                <Product 
                    id='1364985' 
                    title="HP P224 21.5 Inch Monitor 2-Pack Bundle with Desk Mount Clamp Dual Monitor Stand" 
                    price={359.00}  
                    rating={5} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71xSKmvEkHL._AC_SL1275_.jpg' />
                </div>


            </div>
        </div>
    )
}

export default Home
