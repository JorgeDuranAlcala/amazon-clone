import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import AmazonImage from "../../assets/img/amazon-logo-white.png";
import "./styles.css"
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/stateContext';

function Header() {

    const [{bascket}, dispatch] = useStateValue()


    return <div className="header">
                <div className="header__logo" >
                    <Link to="/">
                        <img 
                            src={AmazonImage} 
                            alt="amazon logo"
                            className="header__image"
                            />
                    </Link>
                </div>

                <div className="header__search">
                    <input className="header__input" placeholder="...search" />
                    <SearchIcon className="header__search__icon" />
                </div>
                
                <div className="header__nav">
                    <div className="header__option">
                        <span className="optionLineOne">
                            Hello
                        </span>
                        <span className="optionLineTwo">
                            Sign In
                        </span>
                    </div>

                    <div className="header__option">
                        <span className="optionLineOne">
                            Returns
                        </span>
                        <span className="optionLineTwo">
                            & orders
                        </span>
                    </div>

                    <div className="header__optionBasket">
                        <Link className="header__link" to="/checkout">
                            <ShoppingBasket  />
                        </Link>
                        <span className="optionLineTwo header__basketCount">
                            { bascket.length }
                        </span>
                    </div>

                    
                </div>
        </div>
}

export default Header
