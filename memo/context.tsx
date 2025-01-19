/*
import { ThemeContext } from '@rneui/themed';
import React, { createContext, useState } from 'react';
import { ViewProps } from 'react-native';

interface TodoContextProps {
    todos: TodoProps[];
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({ children }: ViewProps) => {
    const [todos, setTodos] = useState<TodoProps[]>([]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};*/

/*
import React, { createContext, useState, ReactNode } from 'react';

// 2. TodoContext の型を定義します
interface TodoContextProps {
  todos: TodoProps[]; // Todo アイテムの配列
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>; // Todo 配列を更新するための関数
}

// 3. TodoContext を作成します。デフォルト値として undefined を指定
export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

// 4. TodoProvider コンポーネントを作成します
interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<TodoProps[]>([]); // 初期状態として空の配列を使用

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

// 5. TodoContext を使って、コンテキストにアクセスするためのカスタムフックを作成します
export const useTodoContext = () => {
    const context = React.useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
};*/