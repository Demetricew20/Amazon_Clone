import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='header'>

            <Link to='/'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo'></img>
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>

            <div className='header__nav'>
            <Link to='/login'>
                <div className='header__options'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>

                <div className='header__options'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__options'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
                </div>

                <Link to ='/checkout'>
                <div className='header__optionsBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Header