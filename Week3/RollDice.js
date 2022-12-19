import React, { useState } from "react";
import Die from "./Die";
import "./RollDice.css";

const RollDice = ({sides}) => {
    const [state, setState] = useState({
        die1: "two",
        die2: "six",
        rolling: false,
    });

    const { die1, die2, rolling } = state;


    const roll = () => {
        const rolledDie1 = sides[Math.floor(Math.random() * sides.length)];
        const rolledDie2 = sides[Math.floor(Math.random() * sides.length)];
    setState({
        die1:Object.keys(rolledDie1),
        die2:Object.keys(rolledDie2),
        rolling:true,
    });
    setTimeout(()=> {
        setState((prevState) => ({...prevState, rolling:false}))
    },1000);
    };
    return(
        <>
        <div className="roll-dice">
            <div className="rolldice-container">
            <Die face={String(die1)} rolling={rolling}/>
            <Die face={String(die2)} rolling={rolling}/>
            </div>
            <button onClick={roll}>
                Roll Dice</button>
        </div> 
        </>
    );
};
 RollDice.defaultProps = {
     sides:[ 
         {one: 1},
         {two: 2},
         {three: 3},
         {four: 4},
         {five: 5},
         {six: 6},
     ],
 };


export default RollDice;