import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import {POKEMON_INFO_ROUTE} from "../../utils/consts";
import {usePokemonUpdate} from "../../context/SelectedPokemonContext";
import Loading from "../UI/Loading/Loading";
import classes from "./Pokemon.module.css";

const Pokemon = ({pokemon}) => {
    const [loading, data] = useFetch(`${pokemon.url}`);
    const navigate = useNavigate();
    const pokemonUpdate = usePokemonUpdate()
    if(data) console.log(data)

    // console.log('render cart')



    return (
            <div
                className={classes.card_container}
                onClick={() => {
                    pokemonUpdate(data)
                    navigate(POKEMON_INFO_ROUTE+ `/${data.name}`)}}>

                {loading && <Loading/>}
                {(data && !loading) &&
                    <div className={`${classes.card}`}>
                        <h3>{data.name}</h3>
                        <img
                            loading='lazy'
                            key={data.sprites.front_default}
                            src={data.sprites.front_default}
                            alt='image'
                        />


                    </div>
                }

                {/*<img src={data.sprites.other.dream_world.front_default}  alt={''}/>*/}
            </div>
    );

};

export default Pokemon;