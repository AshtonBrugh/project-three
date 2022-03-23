import React, { useState } from "react";
import { useMutation } from '@apollo/client'
import { AiFillFire } from 'react-icons/ai';
import { ADD_REVIEW } from '../utils/mutations'



function ReviewForm() {

    const createArray = (length) => [
        ...Array(length)
    ]

    function Fire({ selected = false, onSelect }) {
        return < AiFillFire
            size='1.5vw'
            color={selected ? "red" : "gray"}
            onClick={onSelect}
        />
    };

    function FireRating({ totalFires = 0 }) {
        const [selectedFires, setSelectedFires] = useState(0);

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


    const [content, setContent] = useState('');
    const [addReview, { error }] = useMutation(ADD_REVIEW);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setContent(event.target.value);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addReview({
                variables: { content }
            });
            setContent('');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <form className="" onClick={handleFormSubmit}>
                <textarea
                    placeholder="Leave a review"
                    value={content}
                    className=""
                    onChange={handleChange}
                ></textarea>
                <FireRating totalFires={5} />
                <button className="" type="submit">
                    Submit
                </button>
            </form>
            {error && <div>Something went wrong...</div>}
        </div>
    );

}

export default ReviewForm;

