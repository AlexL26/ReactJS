import React, { useState, useEffect } from "react";

function Counter () {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `Clikeaste ${count} veces`
    })
    return(
        <div>
            <button onClick={()=> {count>0 ? setCount(count - 1) : false }}>-</button>
            <p> You've cliked {count} times </p>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(0)}>reset</button>
        </div>
    );
}

export default Counter