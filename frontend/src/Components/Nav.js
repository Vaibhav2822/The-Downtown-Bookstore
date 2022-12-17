import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import Logo from '../Assets/Logo.png'
const Nav = () => {
    let auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const [cartValue, setCartValue] = useState(0);
    const logout = () => {
        localStorage.removeItem('user')
        navigate('/signup');
    }
  
    return(
        <div className="nav">
            <img className="logo" src={Logo} alt="logo"></img>
            <input className="searchBox" type="text" placeholder="Search by Title"></input> 
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="30" fill="white"  class="search bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>    
            <Link className="signup" to="/signup">Signup</Link>
            <Link  className="login" to="/login">Login</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="30" fill="rgb(84, 163, 117)" class="wishlist bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="30" fill="rgb(84, 163, 117)" class="cart bi-basket3-fill" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
            </svg>
        </div>
    )
}

export default Nav;