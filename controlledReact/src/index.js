import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const SelectBox = () => {
    const [city, setCity] = useState('');

    const onChange = (e) => {
        setCity(e.target.value);
    };

    const result = city.toLowerCase() === 'vatican city' ?
        `"Vatican city" is the correct answer!` :
        `Meh! ${city} is NOT the smallest city in the world!`

    return (
        <>
            <label>
                What's the smallest city in the world?
                <select name="city" onChange={onChange}>
                    <option value="">Select One …</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="City of London">City of London</option>
                    <option value="Hamilton">Hamilton</option>
                </select>
            </label>
            <div>{city !== '' ? result : null}</div>
        </>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SelectBox />)
