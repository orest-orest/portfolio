import React, {Component, useState, useEffect} from "react";

function Clock() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerId = setInterval(() => tick(), 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    });

    function tick() {
        setDate(new Date());
    }


    return <time className="time">
        {date.toLocaleTimeString()}
    </time>
}

export default Clock