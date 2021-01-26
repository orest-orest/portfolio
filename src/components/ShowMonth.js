import React, {Component, useState, useEffect} from "react";

function ShowMonth() {

    const [date, setDate] = useState(new Date());

    let monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октябрь', 'Ноября', 'Декабря'];
    let dayOfWeekName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    let month = date.getMonth();
    let dayOfMonth = date.getDate();
    let dayOfWeek = dayOfWeekName[date.getDay()];

    return <time className="month">
        {dayOfWeek} {dayOfMonth} {monthName[month]}
    </time>
}

export default ShowMonth