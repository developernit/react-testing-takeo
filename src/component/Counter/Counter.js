import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prev => prev + 1);
    }

    const decrement = () => {
        setCounter(prev => prev - 1)
    }
    return (
        <>
            <button data-testid="add" onClick={increment}>+</button>
            <p data-testid="display">{counter}</p>
            <button data-testid="minus" onClick={decrement}>-</button>
        </>
    )
}

export default Counter;