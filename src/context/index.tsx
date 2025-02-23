import React, { createContext, useState, ReactNode } from 'react';

// Contextの準備
interface TodoContextProps {
  todos: Todo[];
  setTodos: (login: Todo[]) => void;
}
export const TodoContext =
  createContext<TodoContextProps | undefined>(undefined);

// Providerの準備
interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
