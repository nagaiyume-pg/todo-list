import { ScrollView } from 'react-native';
import { TodoItem } from '../TodoItem';

interface TodoListProps {
  todos: string[]
}
// TodoList コンポーネント
export const TodoList = ({todos}: TodoListProps) => {

  return (
    <ScrollView
      bounces={false}
    >
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo} width={375} />
      ))}
    </ScrollView>
  );
};
