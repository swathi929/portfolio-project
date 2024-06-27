import React from 'react';


const Nav = () => {

    return (
<div className="sticky">
        <h1 className="logo">Portfolio</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">     <span className="navbar-toggler-icon"></span>     </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>  
        </ul>
        </div>
    
    </div>
    
    );
};

export default Nav;

