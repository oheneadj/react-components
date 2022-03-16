import React from 'react'

export const Counter = () => {
    const [value, setValue] = React.useState(0);

    const handleIncrease = () => {
        setValue((preValue) => preValue + 1);
    }

    const handleDecrease = () => {
        setValue((preValue) => {
            if (preValue === 0){
                alert("Counter cannot be less than 0");
                return preValue = 0;
            }else{
                return preValue - 1;
            }
            
            });
        
    }

    return (
        <div>
            <h1>Counter is {value}</h1>
            <button onClick={handleIncrease}>Increase Counter</button>
            <button onClick={handleDecrease}>Decrease Counter</button>
        </div>
    )
};