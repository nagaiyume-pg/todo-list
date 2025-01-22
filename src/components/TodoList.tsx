// TodoList.tsx
import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { TodoItem } from '@/components'; // TodoItem コンポーネントをインポート

interface TodoListProps {
  todosList: { id: number; title: string; isChecked: boolean }[]; // 受け取るtodosListの型
  onCheck: (id: number) => void; // チェックボックスの状態を更新する関数
  onDelete: (id: number) => void; // Todoを削除する関数
}

export const TodoList =  (props : TodoListProps) => {

    const { todosList, onCheck, onDelete } = props;

    return (
        <FlashList
            data={todosList}
            renderItem={({ item }) => (
                <TodoItem
                    title={item.title}
                    isChecked={item.isChecked}
                    onCheck={() => onCheck(item.id)} // onCheckを適切に処理
                    onDelete={() => onDelete(item.id)} // onDeleteを適切に処理
                />
            )}
            estimatedItemSize={200}
        />
    );
};
