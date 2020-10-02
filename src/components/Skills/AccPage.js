import React from 'react'

import classes from './Skills.module.css';

const AccPage = props => {
    return(
        <div className={classes.item}>
            <div className={classes.title}>
                <div className={classes.text}>{props.title}</div>
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

export default AccPage