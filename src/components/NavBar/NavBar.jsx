import React from 'react';
import classes from "./NavBar.module.css";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <ul className={classes.navbar}>
                <li><p onClick={
                    () => navigate(HOME_ROUTE)
                }>Home</p></li>
                <li><p>News</p></li>
                <li><p>Contact</p></li>
                <li className={classes.floatRight}><p>Login</p></li>
                <li className={classes.floatRight}><p>About</p></li>
            </ul>
        </nav>

    );
};

export default NavBar;