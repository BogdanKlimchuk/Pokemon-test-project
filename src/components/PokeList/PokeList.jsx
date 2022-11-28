import React, {useEffect, useState} from 'react';
import Pokemon from "../Pokemon/Pokemon";
import {usePage, usePageUpdate} from "../../context/PageContext";
import {useFetch} from "../../hooks/useFetch";
import {ERROR_ROUTE, PER_PAGE, REACT_APP_API_URL} from "../../utils/consts";
import classes from "./PokeList.module.css";
import {useNavigate} from "react-router-dom";

const PokeList = () => {
    const {page} = usePage()
    const {setNewTotalCount} = usePageUpdate()
    const navigate = useNavigate();


    const [loading, data, error] = useFetch(`${REACT_APP_API_URL}?offset=${page * PER_PAGE}&limit=${PER_PAGE}`)
    if(error) console.log(error)


    // if(data) console.log(data)



    //
    useEffect(() => {
        if(!loading && data)
            setNewTotalCount(data.count)
        if(!data && error)  {
            navigate(ERROR_ROUTE)}
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