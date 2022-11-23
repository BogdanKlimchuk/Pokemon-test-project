import React from 'react';
import classes from "./Header.module.css";
import headerEevee from "../../../assets/header-eevee.png"
import headerPokedex from "../../../assets/pokedex.png"
const Header = () => {
    return (
        <header>
            <img src={headerEevee}  alt={'header-eevee.png'}/>
            <div className={classes.title}>
                PokeDex
            </div>
            <img src={headerPokedex}  alt={'header-eevee.png'}/>

        </header>
    );
};

export default Header;