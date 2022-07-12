import React from 'react';
import {useState} from 'react';
import '../styles/styles.css'

export function Calculator(){
    const [numberOne, setNumberOne] =  useState<string>('0');
    const [numberTwo, setNumberTwo] =  useState<string>('0');
    const [result, setResult] =  useState<number>(0);


    function sum(numOne: string ,numTwo:string){
        return setResult(parseFloat(numOne) + parseFloat(numTwo));
    };

    return (
        <div className="container">
            <h1>{process.env.REACT_APP_APP_NAME}</h1>

            <input type="number"  name="numberOne" value={numberOne} onChange={(event) => setNumberOne(event.target.value)}/> 
            <p id="plusSing">+</p>
            <input type="number"  name="numberTwo" value={numberTwo} onChange={(event) => setNumberTwo(event.target.value)} /> <br />

            <button onClick={() => sum(numberOne, numberTwo)}>+</button>
            <h1 id="result">{result}</h1>
        </div>
    );
}