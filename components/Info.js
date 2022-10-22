import React from "react"

export default function Info(){
    return(
        <nav>
            <img src="../images/BusinessCard.png" className="nav--imagen"/>
            <div className="texts"> 
                <div className="name">Carlos Clavijo</div>
                <div className="position">Fullstack Developer and Mechanical Engineer </div>
                <div className="webpage"> cclavijo.website</div>
            </div>
            <div className="buttons">
                <button className="email"><img src="../images/email-20.png" className="email-logo"/><span className="email-text">Email</span></button>
                <button className="linkedin" href="www.linkedin.com/in/carlos-clavijo-q"><img src="../images/linkedin-20.png" className="linkedin-logo"/><span className="linkedin-text">LinkedIn</span></button>
            </div>
                
            
        </nav>
    )
}