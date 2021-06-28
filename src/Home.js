import React from 'react'
import "./Home.css"
import Section from "./Section"
import Books from "./Books"


function Home() {
    return (
        <div>
            <Section/>
            <div className="book__heading">
                <img className="khanda__logo" src="./images/khanda.png" alt=""/>
                <h1>Manjit Singh'S Top Rated Books</h1>
                <img className="khanda__logo" src="./images/khanda.png" alt=""/>
            </div>
            <div className="book__row1">
                <Books 
                    image = "./images/1st.jpeg"
                    title = "Lubana Kaum Da Itehaas"
                    price = "300"
                />
                <Books 
                    image = "./images/2nd.jpeg"
                    title = "Bhai Makhan Shah Lubana"
                    price = "150"
                />
                <Books 
                    image = "./images/3rd.jpeg"
                    title = "Bhai Lakhi Shah Ji Lubana"
                    price = "150"
                />
            </div>

            <div className="book__row1">
                <Books 
                    image = "./images/4th.jpeg"
                    title = "Baba Banda Singh Bahadur"
                    price = "150"
                />
                <Books 
                    image = "./images/5th.jpeg"
                    title = "Baba Prem Singh Ji Muraale Waale"
                    price = "150"
                />
                <Books 
                    image = "./images/6th.jpeg"
                    title = "Bhai Sangat Singh Shaheed"
                    price = "150"
                />
            </div>

            <div className="book__row1">
                <Books 
                    image = "./images/7th.jpeg"
                    title = "Bhai Mani Singh Ji"
                    price = "150"
                />
                <Books 
                    image = "./images/8th.jpeg"
                    title = "Baba Hasna Ji 'Bhagtana'"
                    price = "100"
                />
                
            </div>

            
           
            
        </div>
    )
}

export default Home
