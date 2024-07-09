import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../styles/Home.css"; // Assuming you'll create a CSS file for styling
import Footer from "./footer";

export const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <div className="box-container">
                <Link to="/create" className="box">
                    <h2>Create Quiz</h2>
                    {/* Additional content for creating quiz */}
                </Link>
                <Link to="/read" className="box">
                    <h2>Solve Quiz</h2>
                    {/* Additional content for reading quiz */}
                </Link>
            </div>
            
                 <Footer/>
            
        </div>
    );
}

