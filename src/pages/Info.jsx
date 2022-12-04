import React, {useEffect} from 'react';
import {usePokemon} from "../context/SelectedPokemonContext";
import Header from "../components/UI/Header/Header";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";
import SectionName from "../components/UI/SectionName/SectionName";
import Sprites from "../components/Sprites/Sprites";
import MovesTable from "../components/MovesTable/MovesTable";
import Essentials from "../components/Essentials/Essentials";

const Info = () => {
    const navigate = useNavigate();
    const pokemon = usePokemon()

    useEffect(() => {
        if(!pokemon) navigate(HOME_ROUTE)
    }, [])

    return (
        <>
            {pokemon &&
                <div className={'container'}>
                    <Header tittle={pokemon.name}/>
                    <main className={'infoMain'}>
                        <SectionName text={'Essentials'}/>
                        <Essentials pokemon={pokemon}></Essentials>
                        <SectionName text={'Sprites'}/>
                        <Sprites sprites={pokemon.sprites}/>
                        <SectionName text={'Moves'}/>
                        <MovesTable moves={pokemon.moves}/>
                    </main>
                </div>
            }
        </>
    );
};

export default Info;