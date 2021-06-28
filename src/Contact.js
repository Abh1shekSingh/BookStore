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
                    <p href="https://www.instagram.com/invites/contact/?i=17cr5er0dyyrs&utm_content=hvpx0p">Instagram</p>
                    <p href="https://www.facebook.com/charanjit.singh.560">Facebook</p>
                    <p href="mailto:chann0001@gmail.com">Gmail</p>
                </div>
            </div>
           
        </div>
    )
}

export default Contact
