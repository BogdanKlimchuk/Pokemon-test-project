import React from 'react';
import classes from "../Sprites/Sprites.module.css";


const Sprites = ({sprites}) => {
    return (
        <>
            <div className={classes.spritesContainer}>
                {sprites.front_default  &&
                    <img
                        loading='lazy'
                        key={sprites.front_default}
                        src={sprites.front_default}
                        alt='Pokemon'
                    />
                }
                {sprites.front_shiny  &&
                    <img
                        loading='lazy'
                        key={sprites.front_shiny}
                        src={sprites.front_shiny}
                        alt='Pokemon'
                    />
                }
                {sprites.other["official-artwork"].front_default  &&
                    <img
                        loading='lazy'
                        key={sprites.other["official-artwork"].front_default}
                        src={sprites.other["official-artwork"].front_default}
                        alt='Pokemon'
                    />
                }
            </div>
        </>
    );
};

export default Sprites;