import React from 'react';
import classes from "../MovesTableItem/MovesTableItem.module.css";

import status from "../../assets/DamageClasses/status.png"
import special from "../../assets/DamageClasses/special.png"
import physical from "../../assets/DamageClasses/physical.png"

const MovesTableItem = ({move}) => {
    return (
        <tr>
            <td className={classes.move}><p>{move.name}</p></td>
            <td className={`pokemonTypes`}>
                <span style={{
                    background:`var(--${move.type.name.toLowerCase()})`
                }}
                >
                {move.type.name}
                </span>
            </td>
            <td>
                {
                    move.damage_class.name === 'status' &&
                    <img src={status} alt={status} title={'Status: No damage'}/>
                }
                {
                    move.damage_class.name === 'special' &&
                    <img src={special} alt={special} title={'Special: Special damage, controlled by Special Attack and Special Defence'}/>
                }
                {
                    move.damage_class.name === 'physical' &&
                    <img src={physical} alt={physical} title={'Physical: Physical damage, controlled by Attack and Defence'}/>
                }
            </td>
            <td>{move['pp']}</td>
            <td>{move.power ? move.power : '-'}</td>
            <td>{move.accuracy ? move.accuracy+'%' : '-'}</td>
            <td>{move.priority}</td>
            <td>{move.effect_entries[0].short_effect}</td>
        </tr>
    );
};

export default MovesTableItem;