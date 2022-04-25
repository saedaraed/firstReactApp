import React from 'react'
import Title from "./title/Title"
import Par from "./pargraph/Par"
import Button from "./button/Button"
import './card.css';


function Card() {
    return ( <
        div className = 'feature' >
        <
        Title text = "Features" / >
        <
        div className = "card" >

        <
        div className = 'image' >
        <
        img src = {
            'https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg'
        }
        /> < /
        div > <
        div className = 'details' >
        <
        Par text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." / >
        <
        Button text = "read more" / >
        <
        /div>

        <
        /
        div >
        <
        /div>
    );
}

export default Card;