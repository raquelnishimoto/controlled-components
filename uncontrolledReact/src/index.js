import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';

const SelectBox = () => {
    const selectRef = useRef(null);
    const resultRef = useRef(null);

    const getResult = (city) => {
        return (city).toLowerCase() === 'vatican city' ?
        `"Vatican city" is the correct answer!` :
        `Meh! ${city} is NOT the smallest city in the world!`
    };

    const onChange = () => {
        const currCity = selectRef.current.value;

        document.querySelector(".result").innerHTML = getResult(currCity);
    };


    return (
        <>
            <label>
                What's the smallest city in the world?
                <select name="city" onChange={onChange} ref={selectRef}>
                    <option value="">Select One …</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="City of London">City of London</option>
                    <option value="Hamilton">Hamilton</option>
                </select>
            </label>
            <div className="result" ref={resultRef}></div>
        </>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SelectBox />)
