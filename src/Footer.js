import React from 'react'
import "./Footer.css"
import CallIcon from '@material-ui/icons/Call';
function Footer() {
    return (
        <div className="footer">

            <div className="footer__text">
                <h1><CallIcon/> Order Now</h1>
                
            </div>
            <div className="footer__number">
                <h1>98156-26658</h1>
                <p>Or</p>
                <h1>97790-49172</h1>
            </div>
            <div className="footer__line">

            </div>

            <div className="copyright">
                <p>© 2021 by Historian Manjit Singh Tanda </p>
            </div>
        </div>
    )
}

export default Footer
