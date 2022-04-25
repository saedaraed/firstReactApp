import React from 'react'

import './App.css';
import Button from "./components/button/Button"
import Search from "./components/search/Search"
import Title from "./components/title/Title"
import Par from "./components/pargraph/Par"
import Heading from "./components/heading/HeadH1"
import Header from "./components/header/Header"
import Card from "./components/Card"
import { FaCanadianMapleLeaf } from "react-icons/fa";

function App() {
    return ( <
        div className = "App" >

        <

        div className = "App-header" >
        <
        Header / >
        <
        Heading / >
        <
        Search / >
        <
        FaCanadianMapleLeaf className = "App-logo" / >


        <
        Title text = "About Us" / >
        <
        Par text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " / >

        <
        Button text = "read more" / >

        <
        Card / >

        <
        a className = "App-link"
        href = "https://www.facebook.com/"
        rel = "noopener noreferrer"
        style = {
            { marginTop: "50px", backgroundColor: "aqua", width: "100%", color: "rgb(8, 34, 34)", padding: "5px 0px", textDecoration: "none", fontSize: "15px", fontWeight: "bold" }
        } >
        facebook <
        /a> < /
        div >
        <
        /div>
    );
}

export default App;