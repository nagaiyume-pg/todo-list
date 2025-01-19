import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Contextの準備
interface AppContextType {
    login: boolean;
    setLogin: (login: boolean) => void;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Providerの準備
interface AppProviderProps {
    children: ReactNode;
}
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    // 状態
    const [login, setLogin] = useState<boolean>(false);

    // UI
    return (
        <AppContext.Provider value={{ login, setLogin }}>
            {children}
        </AppContext.Provider>
    );
};