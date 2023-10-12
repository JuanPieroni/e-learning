import React, { useState } from 'react'

export const UseStateHookEx = () => {
    const [count, setCount] = useState(0)

    const handleSumar = () => {
      
        setCount(count + 1)
  
    }
    const handleRestar = () => {
     
        console.log(count);
    
    }
    return (
        <>
            <div>
                <h1>Use State Hook</h1>
                <button className="btn +" onClick={handleSumar}>
                    +
                </button>
                <span>Your number is {count }</span>
                <button className="btn" onClick={handleRestar}>
                    -
                </button>
            </div>
        </>
    )
}
