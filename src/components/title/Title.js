import React from 'react'
import './style.css'


function Title(props) {
    return ( <
        div className = "title" >
        <
        h3 > { props.text } <
        /h3>

        <
        /div >
    );
}

export default Title;