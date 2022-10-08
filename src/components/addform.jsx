import React, { memo } from 'react';

const Addform = memo((props) => {
        const formRef = React.createRef();
        const inputRef = React.createRef();
    
        const onSubmit = (event) => {
            event.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name);
            formRef.current.reset();
        };  
    
        return (
            <form className="add-form" onSubmit={onSubmit} ref={formRef}>
                <input type="text" className="add-input" placeholder="Habit" ref={inputRef} />
                <button className="add-button">Add</button>
            </form>
        );
    }
);

export default Addform;