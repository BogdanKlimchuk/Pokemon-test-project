import React, {useEffect, useState} from 'react';
import Loading from "../UI/Loading/Loading";
import axios from "axios";

import classes from "./MovesTable.module.css";
import MovesTableItem from "../MovesTableItem/MovesTableItem";

const MovesTable = ({moves}) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        Promise.all(moves.flat().map(item =>
             axios.get(item.move.url)
        )).then(response => {
            setData(response.map(item => item.data))
        }).catch(e => console.log(e)
        ).finally(() => setLoading(false))
    },[])


    if(loading)  return <Loading/>

    return (
        <div className={classes.movesTableContainer}>
            <table className={classes.movesTable}>
                <thead>
                <tr>
                    <th>Move</th>
                    <th>Type</th>
                    <th>Class</th>
                    <th>PP</th>
                    <th>Power</th>
                    <th>Acc</th>
                    <th>Pri</th>
                    <th>Effect</th>
                </tr>
                </thead>
                <tbody>
                {data.map(move =>
                    <MovesTableItem key = {move.id} move={move}/>
                )}
                </tbody>
            </table>
        </div>

    );
};

export default MovesTable;