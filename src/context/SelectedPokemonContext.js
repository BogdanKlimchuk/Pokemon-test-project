import React, {useContext, useState} from "react";


const PokemonContext = React.createContext({})
const PokemonUpdateContext = React.createContext({})

export function usePokemon(){
    return useContext(PokemonContext)
}

export function usePokemonUpdate(){
    return useContext(PokemonUpdateContext )
}


export  function PokemonProvider({children}){
    const [pokemon, setPokemon] = useState({})

    function addPokemon(pok){
        setPokemon(pok)
    }

    return(
        <PokemonContext.Provider value={pokemon}>
            <PokemonUpdateContext.Provider value={addPokemon}>
                {children}
            </PokemonUpdateContext.Provider>
        </PokemonContext.Provider>
    )
}