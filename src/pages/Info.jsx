import React from 'react';
import {usePokemon} from "../context/SelectedPokemonContext";
import Spiner from "../components/UI/Spiner/Spiner";



const Info = () => {
    const pokemon = usePokemon()
    console.log(pokemon)

    return (
        <>
            <h2>Info
            </h2>
            <div>
                <Spiner/>

                {/*{pokemon}*/}
            </div>
        </>
    );
};

export default Info;