import React, {Component, useState, useEffect, useRef} from "react";

function NameInput() {

    const [name, setName] = useState(localStorage.nameHash);
    const [focus, setFocus] = useState(false);
    const inputRef = useRef(null);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        inputRef.current.blur();
        if (name.length == 0) {
            localStorage.name = 'Введите ваше имя';
            return setName('Введите ваше имя')
        }
        localStorage.nameHash = name
    };

    const twoCalls = e => {
        setName(e.target.value);
        localStorage.nameHash = e.target.value;
    };

    const checkName = () => {
        if (name.length == 0) {
            localStorage.nameHash = 'Введите ваше имя';
            return setName('Введите ваше имя')
        }
    };

    return <form onSubmit={handleSubmit}>
        < input
            className="name"
            type="text"
            value={name}
            onChange={twoCalls}
            onBlur={checkName}
            ref={inputRef}
        />
    </form>

}


export default NameInput