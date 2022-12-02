import React from 'react';
import AbilityItem from "../AbilityItem/AbilityItem";
import classes from "../Abilities/Abilities.module.css"

const Abilities = ({abilities}) => {
    return (
        <div className={classes.abilitiesContainer}>
            <h3>Abilities</h3>
            <div className={classes.line}/>
            {
                abilities.map(ability => {
                        if(!ability.is_hidden)
                            return <AbilityItem key = {ability.ability.name} ability={ability}/>
                    }
                )
            }

            <h4>Hidden Ability</h4>
            <div className={classes.line}/>
            {
                abilities.map(ability => {
                        if(ability.is_hidden) return <AbilityItem key = {ability.ability.name} ability={ability}></AbilityItem>
                    }
                )
            }
        </div>
    );
};

export default Abilities;