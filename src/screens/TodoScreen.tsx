import React, { useCallback, useState } from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';

import { Header, TodoList } from '@/components';

export const TodoScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const windowWidth = Dimensions.get('window').width; // 画面幅を格納して再利用

  // 最後に追加したタスクのIDを求めるヘルパー関数
  const getNextId = (todos: Todo[]) => {
    return todos.length
      ? Math.max(...todos.map((todo) => Number(todo.id))) + 1
      : 0;
  };

  // 新しいタスクを追加する関数
  const addTodo = useCallback(() => {
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
                id: String(getNextId(todos)), // 追加前にIDを計算
                title: text.trim(),
                completed: false,
              };
              setTodos((prevTodos) => [...prevTodos, newTodo]);
            } else {
              Alert.alert('タスク名が入力されていません');
            }
          },
        },
      ],
      'plain-text'
    );
  }, [todos]);

  // Todoの状態をチェックする関数（完了状態をトグル）
  const checkTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.completed } : todo
      )
    );
  }, []);

  // Todoを削除する関数
  const deleteTodo = useCallback((id: string) => {
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
  }, []);

  // Todoを編集する関数
  const editTodo = useCallback(
    (id: string) => {
      const todoToEdit = todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        Alert.prompt(
          'タスクの編集',
          '新しいタスク名を入力してください',
          [
            {
              text: 'キャンセル',
              style: 'cancel',
            },
            {
              text: '更新',
              onPress: (text) => {
                if (text && text.trim() !== '') {
                  setTodos((prevTodos) =>
                    prevTodos.map((todo) =>
                      todo.id === id ? { ...todo, title: text.trim() } : todo
                    )
                  );
                } else {
                  Alert.alert('タスク名が入力されていません');
                }
              },
            },
          ],
          'plain-text',
          todoToEdit.title
        );
      }
    },
    [todos]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <Header title="Todoリスト" />
      <View style={styles.container}>
        <TodoList
          todos={todos}
          onCheck={checkTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
          width={windowWidth}
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
