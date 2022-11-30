import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import {POKEMON_INFO_ROUTE} from "../../utils/consts";
import {usePokemonUpdate} from "../../context/SelectedPokemonContext";
import Loading from "../UI/Loading/Loading";
import classes from "./Pokemon.module.css";

const Pokemon = ({pokemon}) => {
    const [loading, pokemonData] = useFetch(`${pokemon.url}`)
    const navigate = useNavigate()
    const pokemonUpdate = usePokemonUpdate()


    return (
            <div
                className={`${classes.card_container}`}
                onClick={() => {
                    pokemonUpdate(pokemonData)
                    navigate(POKEMON_INFO_ROUTE+ `/${pokemonData.name}`)}}>

                {loading && <Loading/>}

                {pokemonData && !loading &&
                    <div className={`${classes.card}  ${getShadow(pokemonData.types[0].type.name)}`}>

                        <div className={`${classes.cardHeader} ${classes.flexStretchRow}`}>
                            <h3>{pokemonData.name}</h3> <span>HP<span>-</span>{pokemonData.stats[0].base_stat}</span>
                        </div>
                        <img
                            className={`${classes.cardImage}`}
                            loading='lazy'
                            key={pokemonData.sprites.front_default}
                            src={pokemonData.sprites.front_default}
                            alt='Pokemon image'
                        />

                        <div className={`${classes.pokemonTypes} ${classes.flexStretchRow}`}>
                            {pokemonData.types.map(item => <span key={item.type.name}>{item.type.name}</span>)}
                        </div>

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
                            <div className={`${classes.abilitiesItems}`}>
                                {pokemonData.abilities.map(item => item.is_hidden ? null : <p key = {item.ability.name}>{item.ability.name}</p>)}
                            </div>
                        </div>
                    </div>
                }
            </div>
    );
};

//??????????????????????????
    function getShadow (type){
        if(type === 'grass') return classes.grass
        if(type === 'poison') return classes.poison
        if(type === 'fire') return classes.fire
        return classes.fire
    }

//???????????????????



export default Pokemon;