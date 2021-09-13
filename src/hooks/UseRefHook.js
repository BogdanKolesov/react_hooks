import React, { useState, useEffect, useRef } from 'react';

//useRef сохраняет состояние компонента при рендере, но не вызывает сам рендер!

const UseRefHook = () => {
    const [value, setValue] = useState('initial')

    const renderCount = useRef(1) //реф - не значение, а объект

    const inputRef = useRef(null) //Также с помощью useRef можно получать ссылки на DOM элементы

    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++

        console.log(inputRef.current.value);
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()  //С помощью useRef можно делать фокусы

    return (
        <div>
            <h1>Renders: {renderCount.current}</h1>
            <h2>Прошлое состояние: {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button onClick={focus}>FucusButton</button>

        </div>
    );
};

export default UseRefHook;