import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { TodoItem } from './TodoItem';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

// TodoList コンポーネントの props の型を定義
interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onEdit: (id: string) => void;
  width: number;
}

// TodoList コンポーネント
export const TodoList = ({
  todos,
  onDelete,
  onCheck,
  onEdit,
  width,
}: TodoListProps) => {
  // renderItem に型を指定
  const renderItem: ListRenderItem<Todo> = useCallback(
    ({ item }) => (
      <TodoItem
        key={`TodoItem${item.id}`}
        id={item.id}
        onCheck={onCheck}
        onDelete={onDelete}
        onEdit={onEdit}
        width={width}
        title={item.title}
        completed={item.completed}
      />
    ),
    [onCheck, onDelete, onEdit, width]
  );

  // keyExtractor を有効化して型を指定
  const keyExtractor = useCallback((item: Todo) => item.id, []);

  return (
    <FlashList
      data={todos}
      keyExtractor={keyExtractor}
      estimatedItemSize={68}
      contentContainerStyle={styles.list}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
});
