import React, { useEffect, useState } from 'react';

const centred = {
    width: '60%',
    margin: '0 auto',
}

function useLogger(value) {
    useEffect(() => {
        console.log('valueChanged', value);
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const onChange = event => {
        setValue(event.target.value)
    }
    const clear = () => setValue('')
    return {
        bind: { value, onChange },
        value,
        clear
    }
}

const UseCustomHook = () => {
    // const [name, setName] = useState('')


    // const changeHandler = event => {
    //     setName(event.target.value)
    // }

    const input = useInput('')


    useLogger(input.value)

    return (
        <div style={centred}>
            <input type="text" {...input.bind} />

            <hr />
            <h1>{input.value} </h1>
            <button onClick={() => input.clear()}>Очистить</button>
        </div >
    );
};

export default UseCustomHook;