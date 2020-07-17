import React from "react";

export default function Counter() {
    const [counter, setCounter] = React.useState(0)

   function decrement(){
        if(counter >0){
            setCounter(counter-1)
        }
    }

    return (
        <div className="App">
            <h1>This is counter app</h1>
            <div id="counter-value">{counter}</div>
            <button id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button id="decrement-btn" onClick={() => decrement()}>Decrement</button>
        </div>
    );
}