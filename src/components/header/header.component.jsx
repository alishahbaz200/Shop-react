import React from 'react'
import "./header.style.scss"
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'


function Header() {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                {/*  the logo = .svg  beacuse is best images for zoom and fix face */}
                    <Logo className="logo" />
            </Link>
            <div className="options">
            <Link to="shop" className="option" >SHOP</Link>
                <Link to="shop" className="option" >CONTACT</Link>
            </div>
        </div>
    )
}

export default Header
