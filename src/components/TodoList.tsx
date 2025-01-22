// TodoList.tsx
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { TodoItem, TodoItemProps } from '@/components'; // TodoItem コンポーネントをインポート

interface TodoListProps extends Omit<TodoItemProps, 'onCheck' | 'onDelete'> {
    todos: { id: number; title: string; isChecked: boolean }[];
    // TODO:onCheckとonDeleteがTodoItemPropsから継承が出来るようにしたい
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TodoList =  (props : TodoListProps) => {
    const { todos, onCheck, onDelete } = props;

    return (
        <FlashList
            data={todos}
            renderItem={({ item }) => (
                <TodoItem
                    title={item.title}
                    isChecked={item.isChecked}
                    onCheck={() => onCheck(item.id)}
                    onDelete={() => onDelete(item.id)}
                />
            )}
            estimatedItemSize={200}
        />
    );
};
