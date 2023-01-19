import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://cdn-icons-png.flaticon.com/512/8669/8669810.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/popular"><img className="header__icon" src="https://cdn-icons-png.flaticon.com/512/426/426833.png" /></Link>

                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/top_rated"><img className="header__icon" src="https://cdn-icons-png.flaticon.com/512/4396/4396816.png" /></Link>

                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/movies/upcoming"><img className="header__icon" src="https://cdn-icons-png.flaticon.com/512/6606/6606320.png" /></Link>

            </div>
        </div>
    )
}

export default Header