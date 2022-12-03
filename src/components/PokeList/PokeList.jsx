import React, {useEffect} from 'react';
import Pokemon from "../Pokemon/Pokemon";
import {usePage, usePageUpdate} from "../../context/PageContext";
import {useFetch} from "../../hooks/useFetch";
import {PER_PAGE, REACT_APP_API_URL} from "../../utils/consts";
import classes from "./PokeList.module.css";

const PokeList = () => {
    const {page} = usePage()
    const {setNewTotalCount} = usePageUpdate()

    const [loading, data, error] = useFetch(`${REACT_APP_API_URL}?offset=${page * PER_PAGE}&limit=${PER_PAGE}`)
    if(error) console.log(error)

    useEffect(() => {
        if(!loading && data)
            setNewTotalCount(data.count)
    },[data])

    return (
        <>
            {data  &&
                <div className={classes.list}>
                    {data.results.map(pok =>
                        <Pokemon key ={pok.name} pokemon = {pok}></Pokemon>
                    )}
                </div>
            }
        </>
    );
};

export default PokeList;