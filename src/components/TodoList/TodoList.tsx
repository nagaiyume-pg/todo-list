import { StyleSheet } from 'react-native';
import { TodoItem } from '../TodoItem';
import { FlashList } from '@shopify/flash-list';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
  width: number;
}

// TodoList コンポーネント
export const TodoList = ({ todos, onDelete, onCheck, width }: TodoListProps) => {
  return (
    <FlashList
      data={todos}
      estimatedItemSize={100}
      contentContainerStyle={styles.list}
      renderItem={({item}) =>
        <TodoItem
          key={`TodoItem${item.id}`}
          id={item.id}
          onCheck={onCheck}
          onDelete={onDelete}
          width={width}
          title={item.title}
          checked={item.checked}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white"
  }
})