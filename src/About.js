import React from 'react'
import "./About.css"
import Award from './Award'
function About() {
    return (
        <div>
        <div className="about">
           <div className="about__image">
                <img className="client__image" src="./images/Client_img.jpg" alt="client_image"/>
           </div>
           <div className="about__text">
                <h2>SatShriAkal Ji ! <br></br><br></br><span>  I am Manjit Singh Tanda, a Historic Book Author. I wrote books about the bravery & Historic moments of sikhs. My work is being Loved all over the country. Approximately <em><u>1000 of Copies</u></em> has been sold in India as well as In Other Countries. <br></br><br></br> Also want to say that, If you ant to buy my book, and want to know about the history and the culture of sikhs You can call on the number given below.</span></h2>
           </div>

           
           
        </div>
        <div className="awards__heading">
                    <h1>AWARDS</h1>
        </div>

        <div className="Award">
            <Award
                image= "./images/award1.jpg"
            />
            <Award
                image= "./images/award4.jpg"
            />
            <Award
                image= "./images/award5.png"
            />
        </div>
        <div className="Award">
            <Award
                image= "./images/award6.png"
            />
            <Award
                image= "./images/award2.jpg"
            />
            <Award
                image= "./images/award3.jpg"
            />
        </div>
        <div className="Award">
            <Award
                image= "./images/award7.jpg"
            />
            <Award
                image= "./images/award8.jpg"
            />
            <Award
                image= "./images/award10.jpg"
            />
        </div>
        </div>
    )
}

export default About
