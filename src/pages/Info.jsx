import React, {useEffect} from 'react';
import {usePokemon} from "../context/SelectedPokemonContext";
import Header from "../components/UI/Header/Header";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";
import Abilities from "../components/Abilities/Abilities";
import Essentials from "../components/UI/Essentials/Essentials";


const Info = () => {
    const navigate = useNavigate();
    const pokemon = usePokemon()

    useEffect(() => {
        if(!pokemon) navigate(HOME_ROUTE)
    }, [])

    console.log(pokemon)

    return (
        <>
            {pokemon &&
                <div className={'container'}>
                    <Header tittle={pokemon.name}/>
                    <main className={'infoMain'}>
                        <Essentials/>
                        <div className={'essentials'}>
                            <div className={'imageContainer'}>
                                <h3>{pokemon.name}</h3>
                                <img
                                    loading='lazy'
                                    key={pokemon.sprites.front_default}
                                    src={pokemon.sprites.front_default}
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
                                <div className={'pokemonSize'}>
                                    <div><b>Height</b> - {pokemon.height/10}m</div>
                                    <div><b>Weight</b> - {pokemon.weight/10}kg</div>
                                </div>


                            </div>
                            <Abilities abilities={pokemon.abilities}/>
                        </div>


                    </main>
                </div>
            }
        </>
    );
};

export default Info;