import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import AmazonImage from "../../assets/img/amazon-logo-white.png";
import "./styles.css"
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/stateContext';
import { actionTypes } from '../../reducer';
import { Menu as MenuIcon } from '@material-ui/icons'
import { useMediaQuery } from '@material-ui/core'

function Header() {

    const [{bascket, user}, dispatch] = useStateValue()
    const match = useMediaQuery(theme => theme.breakpoints.up('sm'));

    const logOut = () => {
        dispatch({
            type: actionTypes.LOG_OUT
        })
    }


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

                { match && (
                    <div className="header__search">
                        <input className="header__input" type="text" />
                        <SearchIcon className="header__search__icon" />
                    </div>
                  )
                }
                
                <div className="header__nav">
                    <div className="header__option">
                        <span className="optionLineOne">
                            Hello { user ? user.email : "guest" }
                        </span>
                           { user ? <span onClick={logOut} className="optionLineTwo">
                                Log out
                            </span> :
                            <Link className="header__link" to="/login">
                                <span className="optionLineTwo">
                                    Sign In
                                </span>
                              </Link>
                            }
                    </div>

                    <div className="header__option">
                        <span className="optionLineOne">
                            Returns
                        </span>
                        <Link className="header__link" to="/orders">
                            <span className="optionLineTwo">
                                & orders
                            </span>
                        </Link>
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
