import React from "react";
import Logo from '../Assets/Logo.png'

const Home = () => {
    return(
       <div className="home-page">
            <img className="home-img" src={Logo} alt="logo"></img>
            <hr className="margin-top"></hr>
            <svg xmlns="http://www.w3.org/2000/svg" class="leftarrow bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
            <p className="bestSeller">Best Seller</p>
            <p className="Mysteries">Mysteries</p>
            <p className="Romance">Romance</p>    
            <p className="Thrillers">Thrillers</p>   
            <p className="Science-Fiction">Science Fiction</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="rightarrow bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>  
            <hr className="margin-bottom"></hr>
       </div>
    )
}

export default Home;