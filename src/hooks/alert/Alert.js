import React, { useContext } from 'react';
import { useAlert } from './AlertContext'

const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div onClick={alert.toggle}>
            <p>Важное сообщение</p>
        </div>
    );
};

export default Alert;