import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createContext } from 'react';

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
    const [isAuthenticated, setIsauthenticated] = useState(false);

    return (
        <Context.Provider value={{
            isAuthenticated, setIsauthenticated,
        }}>
            <App/>
        </Context.Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppWrapper/>
    </React.StrictMode>
);