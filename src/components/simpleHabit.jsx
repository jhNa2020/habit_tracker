import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = () => {
    const [ count, setCount ] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(() => {
        console.log(`mounted & updated: ${count}`);
    }, []);     // 2번째 param에 비어있는 []을 입력하면, mounted인 경우만 호출되고 updated 경우에는 호출되지 않는다

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabit;