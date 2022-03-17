import React, { useState } from "react";
import { AiFillFire } from 'react-icons/ai';

const createArray = (length) => [
    ...Array(length)
]

function Fire ( { selected = false, onSelect }) {
    return < AiFillFire 
            size='1.5vw'
            color={selected ? "red" : "gray"}
            onClick={onSelect}
             />
};

function FireRating ( { totalFires = 0 }) {
    const [selectedFires, setSelectedFires ] = useState(0);

    return (
    <>
    {createArray(totalFires).map((n, i) => (
        <Fire key={i} 
        selected={selectedFires > i} 
        onSelect={() => setSelectedFires(i + 1)}
        />
    ))};
    <p>{selectedFires} of {totalFires} fires</p>
    </>
    );
}

function ReviewForm () {
    return <FireRating totalFires={5}/>
}

export default ReviewForm;

