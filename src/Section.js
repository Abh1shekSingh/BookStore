import React from 'react'
import "./Section.css"
function Section() {
    return (
        <div className="section">
            <div className="Section__left">
                <img className="Section__left__image" src="./images/Section_left_image_edit.jpg" alt="Lord_Image"/>
            </div>
            <div className="Section__right">
                <h1 className="Section__heading"><span>Historian</span> <br></br>Manjit Singh Tanda</h1>   
                <p className="section__headline">Author of Best Selling Sikh Historic & Lubana Historic Books</p>
                <img className="section__right__image" src="./images/Client.jpeg" alt="Client_Inage"/>   
                <div className="section__sign">
                    <p>Manjit Singh</p>
                </div>     
            </div>
            
        </div>
    )
}

export default Section
