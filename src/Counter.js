import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState( () => Math.floor(Math.random() * 16)); //instead of using 0

    const incrBy3 = () => {
        console.log('incrBy3');
        // setCounter(counter + 3); this way can cause errors - it won't change asynchronously
        setCounter(previous => previous + 3 ); // updating the state based on it's current value 
    }

    return(
        <div>
            <div className="counter-box">
                <p>{counter}</p>
                <br></br>
                <button onClick={incrBy3}>Add + 3</button>
            </div>
        </div>
    )
};

export default Counter;