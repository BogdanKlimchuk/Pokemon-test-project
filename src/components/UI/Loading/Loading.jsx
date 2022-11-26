import React from 'react';
import classes from './Loading.module.css'
const Loading = () => {
    return (
            <div className={classes.item}>
                <i className={classes.loader}></i>
            </div>

        // <div className={classes.loader}
        //
        //
        //
        // style={{
        //     width: size || 50,
        //     height: size || 50
        // }}
        //
        // ></div>
    );
};

export default Loading;