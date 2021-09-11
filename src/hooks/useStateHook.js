import React, { useState } from 'react';

function computeInitialCounter() {          //Можно через функцию задать предустановленое значение
    console.log('Some calculations...');    //Но лучше так не делать т.к. забивает вычислительные мощности
    return Math.trunc(Math.random() * 20)
}

// Взаимодействие со стейтом
//Можно опредлять стейт только вверху компонента
// Хук работает асинхронно
//Чтобы значение стейта изменилось, должен пройти круг рендера
//

const UseStateHook = () => {
    const [counter, setCounter] = useState(() => Math.trunc(Math.random() * 20) //Лучше сразу передать сюда колбэк
    );


    //Проще написать useState для title и date)
    const [datas, setDatas] = useState({
        title: 'Счётчик',
        date: Date.now()
    })

    function inc() {
        // setCounter(counter + 1)

        setCounter((prevCounter) => {
            return prevCounter + 1 //Так можно обойти груг рендера
        })
        setCounter(prev => prev + 1)
    }

    function dec() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setDatas(prev => {
            return {
                ...prev,
                title: 'New Title'
            }
        })
    }


    return (
        <div>
            <h1 >Counter {counter}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={() => setDatas(updateTitle)}>Изменить название</button>
            <pre>{JSON.stringify(datas, null, 2)}</pre>
        </div>
    );
};

export default UseStateHook;