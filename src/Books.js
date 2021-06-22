import React from 'react'
import "./Books.css";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
function Books({image, title , price}) {
    return (
        <div className="books">
            
            <div className="book__info">
                
               <img className="book__image" src={image} alt="this_is_book"/>
                
                <div className="book__name">
                    <p>{title}</p>
                </div>
                <div className="book__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
                <div>
                <Link to="/contact" style={{textdecoration:'none'}}>
                    <Button variant="contained" color="primary" >
                        Buy Now
                    </Button>
                </Link>
                </div>
            </div>
           
        </div>
    )
}

export default Books
