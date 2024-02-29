import { useState } from 'react';
import {questions} from './data';

export const FlashCards = () => {
    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id) {
        setSelectedId(id !== selectedId ? id : null)
    }


    return (
        <section className="flashcards">
            {questions.map((item) => (
                <div key={item.id} onClick={() => handleClick(item.id)} className={item.id === selectedId ? 'selected' : ''}>
                    <p>{item.id === selectedId ? item.answer : item.question}</p>
                </div>
            ))}
        </section>
    )
}