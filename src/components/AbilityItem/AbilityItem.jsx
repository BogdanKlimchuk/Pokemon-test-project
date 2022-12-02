import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import classes from "../AbilityItem/AbilityItem.module.css";




const AbilityItem = ({ability}) => {

    const  [loading, abilityData, error] = useFetch(ability.ability.url)

    return (
        <>
            {abilityData &&
                <div className={classes.abilityItem}>
                    <div>
                        <p
                            className={classes.abilityName}
                        >{abilityData.name}:
                        </p>

                        {
                            abilityData.effect_entries.map(item => {
                                if(item.language.name === 'en')
                                    return <span
                                        key = {abilityData.name}
                                        className={classes.abilityInfo}
                                    >
                                        {item.effect}
                                </span>
                            })
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default AbilityItem;