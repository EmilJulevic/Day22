import React from 'react';

function Box(props) {
    console.log(props)
    return <h2>This is a {props.size}px Box!</h2>

}

export default Box;