import React from 'react';
import Alert from './alert/Alert';
import { AlertProvider } from './alert/AlertContext';
import Main from './Main'

const UseContextHook = () => {


    return (
        <AlertProvider>
            <div>
                <Main toggle={() => { }} />
                <Alert />
            </div>
        </AlertProvider>
    );
};

export default UseContextHook;