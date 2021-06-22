import React from 'react'
import "./Award.css"
function Award({image}) {
    return (
        <div className="awards">
                
                <div className="awards__publish">
                    <img className="award" src={image} alt="award_pic"/>
                    
                </div>
           </div>
    )
}

export default Award
