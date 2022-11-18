import React from "react";
import "./Section2.css";
import img from "../images/icon-music.svg";

const Section2 = () => {
    return ( <
        div className = "section2" >
        <
        h1 > Order Summary < /h1> <
        p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere illum <
        /p> <
        div className = "float" >
        <
        div >
        <
        img src = { img }
        alt = "" / >
        <
        span >
        Annual Plan < br / >
        $59 .99 / year <
        /span> <
        /div> <
        p >
        <
        a href = "#" > Change < /a> <
        /p> <
        /div> <
        /div>
    );
};

export default Section2;