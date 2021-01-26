import React, {Component, useState, useEffect} from "react";


function Background() {
    const [background, setBackground] = useState(0);
    const [greeting, setGreeting] = useState(undefined);
    const [today, setToday] = useState(new Date);

    useEffect(() => {
        let hour = today.getHours();
        if (hour > 6 && hour < 12) {
            setBackground(`assets/images/morning/${Math.floor(Math.random() * Math.floor(20)) + 1}.jpg`);
            setGreeting('Доброе утро, ');

        } else if (hour > 11 && hour < 18) {
            setBackground(`assets/images/day/${Math.floor(Math.random() * Math.floor(20)) + 1}.jpg`);
            setGreeting('Добрый день, ');
        }

        else if (hour > 17 && hour < 22) {
            setBackground(`assets/images/evening/${Math.floor(Math.random() * Math.floor(20)) + 1}.jpg`);
            setGreeting('Добрый вечер, ');
        }
        else {
            setBackground(`assets/images/night/${Math.floor(Math.random() * Math.floor(20)) + 1}.jpg)`);
            setGreeting('Доброй ночи, ');
        }
    }, [today]);


    document.body.style.backgroundImage = 'url(' + background + ')';

    return <>
        <h2>{greeting}</h2>
    </>


}

export default Background;