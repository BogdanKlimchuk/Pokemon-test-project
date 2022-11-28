import React, {useEffect, useState} from 'react';
import {useFetch} from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import {POKEMON_INFO_ROUTE} from "../../utils/consts";
import {usePokemonUpdate} from "../../context/SelectedPokemonContext";
import Loading from "../UI/Loading/Loading";
import classes from "./Pokemon.module.css";
import axios from "axios";

const Pokemon = ({pokemon}) => {
    const [loading, pokemonData] = useFetch(`${pokemon.url}`)
    const navigate = useNavigate()
    const pokemonUpdate = usePokemonUpdate()

    return (
            <div
                className={classes.card_container}
                onClick={() => {
                    pokemonUpdate(pokemonData)
                    navigate(POKEMON_INFO_ROUTE+ `/${pokemonData.name}`)}}>

                {loading && <Loading/>}

                {(pokemonData && !loading) &&
                    <div className={`${classes.card}`}>
                        <h3>{pokemonData.name}  <span>HP {pokemonData.stats[0].base_stat}</span>   </h3>
                        <img
                            loading='lazy'
                            key={pokemonData.sprites.front_default}
                            src={pokemonData.sprites.front_default}
                            alt='Pokemon image'
                        />
                        <p>
                            {pokemonData.types.map(item => <span key={item.type.name}>{item.type.name} </span>)}
                        </p>
                        <p>Atk Def SpA SpD Spd</p>
                        {pokemonData.stats.map(item => item.stat.name === 'hp'? null : <span key={item.stat.name}>{item.base_stat} </span>)}

                        <p>Abilities</p>

                        {pokemonData.abilities.map(item => item.is_hidden ? null : <p key = {item.ability.name}><b>{item.ability.name}</b></p>)}

                    </div>
                }
            </div>
    );

};

export default Pokemon;