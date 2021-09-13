import React, { useState, useCallback } from 'react';
import ItemsList from './itemsList'

//Оборачивает колбэк, который нужно закэшировать, и полностью его возвращает

const UseCallbackHook = () => {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkBlue' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill().map((_, i) => `Элемент ${i + 1}`)
    }, [count])

    return (
        <div>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить цвет</button>

            <ItemsList getItems={generateItemsFromAPI}></ItemsList>
        </div>
    );
};

export default UseCallbackHook;