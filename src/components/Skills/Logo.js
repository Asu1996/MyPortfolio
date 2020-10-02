import React from 'react'

const Logo = props => {
    
    return(
        <div>
            <img style={{width:'50px', height:'50px'}} src={props.image} alt='nothing here!'/>
            <p>{props.name}</p>
        </div>
    )
}

export default Logo;