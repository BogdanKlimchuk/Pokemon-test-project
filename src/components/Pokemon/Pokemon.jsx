import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import {POKEMON_INFO_ROUTE} from "../../utils/consts";
import {usePokemonUpdate} from "../../context/SelectedPokemonContext";
import Loading from "../UI/Loading/Loading";
import classes from "./Pokemon.module.css";
import pokeBall from "../../assets/pokeball.png"

const Pokemon = ({pokemon}) => {
    const [loading, pokemonData] = useFetch(`${pokemon.url}`)
    const navigate = useNavigate()
    const setSelectedPokemon = usePokemonUpdate()
    const navigateToInfo = () => {
        setSelectedPokemon(pokemonData)
        navigate(POKEMON_INFO_ROUTE+ `/${pokemonData.name}`)
    }

    return (
            <div
                className={`${classes.card_container}`}
                onClick={() => {navigateToInfo()}}>

                {loading && <Loading/>}

                {pokemonData && !loading &&
                    <div
                        className={`
                        ${classes.card} 
                        ${pokemonData.types[0].type.name} 
                        ${pokemonData.types[1] ?pokemonData.types[1].type.name+'2': pokemonData.types[0].type.name+'2'}   
                        `}
                    >

                        <div className={`${classes.cardHeader} ${classes.flexStretchRow}`}>
                            <h3>{pokemonData.name}</h3> <span>HP<span>-</span>{pokemonData.stats[0].base_stat}</span>
                        </div>

                        <div className={`${classes.imageContainer}`}>
                            <img
                                loading='lazy'
                                key={pokemonData.sprites.front_default}
                                src={pokemonData.sprites.front_default ? pokemonData.sprites.front_default :  pokeBall}
                                alt='Pokemon image'
                            />
                        </div>

                        <div className={`pokemonTypes ${classes.flexStretchRow}`}>
                            {pokemonData.types.map(item =>
                                <span
                                    style={{
                                        background:`var(--${item.type.name.toLowerCase()})`
                                    }}

                                    key={item.type.name}>{item.type.name}
                                </span>)}
                        </div>

                        <p  className={`${classes.flexStretchRow}`}>Stats</p>
                        <div className={`${classes.flexStretchRow}`}>
                            <div className={`${classes.statsContainer}  `}>
                                <div title={'Attack'}><b>Atk</b></div>
                                <div title={'Defence'}><b>Def</b></div>
                                <div title={'Special Attack'}><b>SpA</b></div>
                                <div title={'Special Defence'}><b>SpD</b></div>
                                <div title={'Speed'}><b>Spd</b></div>
                                {pokemonData.stats.map(item => item.stat.name === 'hp'? null : <div key={item.stat.name}>{item.base_stat} </div>)}
                            </div>
                        </div>


                        <div className={`${classes.abilitiesContainer} ${classes.flexStretchRow}`}>
                            <p><b>Abilities</b></p>
                            <div className={`${classes.flexStretchRow} ${classes.abilitiesItems}`}>
                                {pokemonData.abilities.map(item => item.is_hidden ? null : <p key = {item.ability.name}>{item.ability.name}</p>)}
                            </div>
                        </div>
                    </div>
                }
            </div>
    );
};



export default Pokemon;