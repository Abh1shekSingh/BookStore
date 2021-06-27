import React from 'react'
import "./Header.css"

import {Link} from "react-router-dom";
  
function Header() {
    return (
        
            <div className="header">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <div className="header__logo">
                        <img className="ikonkar__logo" src="./images/ikonkar.png" alt=""/>
                        <h1>Historian Manjit Singh Tanda</h1>
                        <img className="ikonkar__logo" src="./images/ikonkar.png" alt=""/>
                    </div>
                </Link>
                
               
                    <div className="header__option">
                        
                        <Link to="/about" style={{ textDecoration: 'none' , color:'#666' }}>
                            <p>About</p>
                        </Link>

                        <Link to="/contact" style={{ textDecoration: 'none' , color:'#666' }}>
                            <p>Order Books</p>
                        </Link>
                        
                        <Link to="/contact" style={{ textDecoration: 'none' , color:'#666' }}>
                            <p>Contact</p>
                        </Link>
                       
                    </div>
               
            </div>
           
    )
}

export default Header
