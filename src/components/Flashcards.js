import React, { useState, forwardRef } from "react";
import {questions} from './data';

export const FlashCards = forwardRef((props, ref) => {
    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null)
    }

    return (
        <section className="flashcards" id="cards" ref={ref}>
            {questions.map((item) => (
                <div data-test={item.id} key={item.id} onClick={() => handleClick(item.id)} className={item.id === selectedId ? 'selected' : ''}>
                    <p>{item.id === selectedId ? item.answer : item.question}</p>
                </div>
            ))}
        </section>
    )
})