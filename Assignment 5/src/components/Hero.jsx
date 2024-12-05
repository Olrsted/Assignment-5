import "./Hero.css";
import hero from "../components/HeroBG.png"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

function Hero() {

    return(
        <div className="HeroS">
            <img className="hero-bg" src={hero} />
            <div className="HeroT"><label>Watch Movies,Shows,Anime and More!</label></div>
            <div className="registerB">
                <button onClick={() => { registerPage() }}>Sign Up</button>
            </div>
        </div>

    )
}