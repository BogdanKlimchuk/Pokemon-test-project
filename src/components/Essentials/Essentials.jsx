import React from 'react';
import pokeBall from "../../assets/pokeball.png";
import Abilities from "../Abilities/Abilities";
import StatsChart from "../StatsChart/StatsChart";
import classes from "../Essentials/Essentials.module.css";



const Essentials = ({pokemon}) => {
    return (
        <div className={classes.essentials}>
            <div className={classes.imageContainer}>
                <h3>{pokemon.name}</h3>
                <img
                    loading='lazy'
                    key={pokemon.sprites.front_default}
                    src={pokemon.sprites.front_default ? pokemon.sprites.front_default :  pokeBall}
                    alt='Pokemon image'
                />
                <div className={'pokemonTypes'}>
                    {pokemon.types.map(item =>
                        <span
                            style={{
                                background:`var(--${item.type.name.toLowerCase()})`
                            }}
                            key={item.type.name}>{item.type.name}
                                </span>)}
                </div>
                <div>
                    <div><b>Height</b> - {pokemon.height/10}m</div>
                    <div><b>Weight</b> - {pokemon.weight/10}kg</div>
                </div>
            </div>
            <Abilities abilities={pokemon.abilities}/>
            <StatsChart stats={pokemon.stats}/>
        </div>
    );
};

export default Essentials;