import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

// Todoインターフェースの定義
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// Contextの型定義
interface TodoContextProps {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

// Contextの作成
export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

// Providerの型定義
interface TodoProviderProps {
    children: ReactNode;
}

// TodoProviderコンポーネント
export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    // valueをuseMemoでメモ化して再レンダリングを防止
    const value = useMemo(() => ({ todos, setTodos }), [todos]);

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

// TodoContextを使うカスタムフック
export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
};
