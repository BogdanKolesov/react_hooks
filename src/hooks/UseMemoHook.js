import React, { useState, useEffect, useMemo } from 'react';

//useMemo помогает не изменять другой стейт! (ОПТИМИЗАЦИЯ!)
//useMemo кэширует объекты

function complexCompute(num) {
    console.log('ComplexCompute');
    let i = 0;
    while (i < 1000000000) i++
    return num * 2
}

const UseMemoHook = () => {
    const [number, setNumber] = useState(42);

    const [colored, setColored] = useState(false)

    const computed = useMemo(() => {
        complexCompute(number)
    }, [number])

    const styles = useMemo(() => ({  //кэширование
        color: colored ? 'darkBlue' : 'black'
    }), [colored])

    useEffect(() => {
        console.log('Styles changed!');
    }, [styles])
    return (
        <div>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить</button>

        </div>
    );
};

export default UseMemoHook;