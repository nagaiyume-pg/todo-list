import { Alert, Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { Header, TodoList } from '@/components';

export const TodoScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const windowWidth = Dimensions.get('window').width; // 画面幅を格納して再利用

  console.log(todos);

  // 新しいタスクを追加する関数
  const addTodo = () => {
    Alert.prompt(
      '新しいタスク',
      'タスク名を入力してください',
      [
        {
          text: 'キャンセル',
          style: 'cancel',
        },
        {
          text: '追加',
          onPress: (text) => {
            if (text && text.trim() !== '') {
              const newTodo: Todo = {
                id: Date.now(), // 現在のタイムスタンプをIDに使用
                title: text.trim(),
                checked: false,
              };

              // setTodosに関数形式を使用して前回の状態を基に更新
              setTodos((prevTodos) => [...prevTodos, newTodo]);
            } else {
              Alert.alert('タスク名が入力されていません');
            }
          },
        },
      ],
      'plain-text'
    );
  };

  // Todoの状態をチェックする関数（完了状態をトグル）
  const checkTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // Todoを削除する関数
  const deleteTodo = (id: number) => {
    Alert.alert(
      '削除確認',
      '本当に削除しますか？',
      [
        {
          text: 'キャンセル',
          style: 'cancel',
        },
        {
          text: '削除',
          onPress: () => {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <Header title="Todoリスト" />
      <View style={styles.container}>
        {/* TodoListにtodosを渡し、削除関数と完了状態トグル関数も渡す */}
        <TodoList
          todos={todos}
          onCheck={checkTodo}
          onDelete={deleteTodo}
          width={windowWidth} // 事前に計算した画面幅を渡す
        />
      </View>
      <Button
        onPress={addTodo}
        icon={{
          name: 'add',
          size: 70,
          color: 'white',
        }}
        iconContainerStyle={{
          marginLeft: 0,
          marginRight: 0,
        }}
        buttonStyle={{
          backgroundColor: 'blue',
          borderRadius: 35,
          padding: 0,
          paddingHorizontal: 0,
        }}
        containerStyle={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});


/*
import { Alert, Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { Header, TodoList } from '@/components';

export const TodoScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos)

  // 新しいタスクを追加する関数
  const addTodo = () => {
    Alert.prompt(
      '新しいタスク',
      'タスク名を入力してください',
      [
        {
          text: 'キャンセル',
          style: 'cancel',
        },
        {
          text: '追加',
          onPress: (text) => {
            if (text && text.trim() !== '') {
              const newTodo: Todo = {
                id: todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1, // Unique ID generation
                title: text.trim(),
                checked: false,
              };
              setTodos([...todos, newTodo]);
            } else {
              Alert.alert('タスク名が入力されていません');
            }
          },
        },
      ],
      'plain-text'
    );
  };

  // Todoの状態をチェックする関数（完了状態をトグル）
  const checkTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo // Toggle the `checked` state
    );
    setTodos(updatedTodos);
  };

  // Todoを削除する関数
  const deleteTodo = (id: number) => {
    Alert.alert(
      '削除確認',
      '本当に削除しますか？',
      [
        {
          text: 'キャンセル',
          style: 'cancel',
        },
        {
          text: '削除',
          onPress: () => {
            const updatedTodos = todos.filter((todo) => todo.id !== id); // Filter out the deleted Todo by ID
            setTodos(updatedTodos); // Update the Todo list
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <Header title="Todoリスト" />
      <View style={styles.container}>
          todos={todos}
          onCheck={checkTodo}
          onDelete={deleteTodo}
          width={Dimensions.get('window').width}
        />
      </View>
      <Button
        onPress={addTodo}
        icon={{
          name: 'add',
          size: 70,
          color: 'white',
        }}
        iconContainerStyle={{
          marginLeft: 0,
          marginRight: 0,
        }}
        buttonStyle={{
          backgroundColor: 'blue',
          borderRadius: 35,
          padding: 0,
          paddingHorizontal: 0,
        }}
        containerStyle={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
*/
