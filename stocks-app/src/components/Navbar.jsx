import React from "react"
import {Link} from "react-router-dom"
import './Navbar.css'

function Navbar(){
    return <nav className ="navbar bg-secondary">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/about">About</Link></h4>
        <h4><Link className="link" to="/shop">Shop</Link></h4>
        <h4><Link className="link" to="/terminology">Terminology</Link></h4>
        <h4><Link className="link" to="/resource">Resource</Link></h4>
        <h4><Link className="link" to="/reviews">Reviews</Link></h4>
        <h4><Link className="link" to="/create">Create Reviews</Link></h4>
    </nav>
}

export default Navbar;