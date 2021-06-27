import React from 'react'
import "./Contact.css"
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
function Contact() {
    return (
        <div className="contact">
            <div className="contact__div">
                <div className="contact__heading">
                    <h1>ORDER NOW</h1>
                    <p>Contact Us</p>
                </div>
                <div className="contact__number">
                
                <div className="whatsapp__icon"><WhatsAppIcon/></div>

                
                <h1>98156-26658</h1>
                <div className="whatsapp__icon2"><WhatsAppIcon/></div>

                <h1>97790-49172</h1>
                </div>
                <div className="contact__social">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Gmail</p>
                </div>
            </div>
           
        </div>
    )
}

export default Contact
