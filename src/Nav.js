import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 150) {
                handleShow(true)
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo" />

            <img className="nav__avatar"
            src="https://ih0.redbubble.net/image.618385909.1713/flat,1000x1000,075,f.u2.jpg"
            alt="Netflix Logo" />
            
        </div>
    )
}

export default Nav
