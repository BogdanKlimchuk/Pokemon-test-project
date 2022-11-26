import React from 'react';
import {usePokemon} from "../context/SelectedPokemonContext";
import Loading from "../components/UI/Loading/Loading";



const Info = () => {
    const pokemon = usePokemon()
    console.log(pokemon)

    return (
        <>
            <h2>Info
            </h2>
            <div>
                <Loading/>

                {/*{pokemon}*/}
            </div>
        </>
    );
};

export default Info;