import { Alert, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';

import { Header, TodoList } from '@/components';
import { useState } from 'react';

export const TodoScreen = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    // Alertを表示して新しいタスクを追加
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
            // 'text'がundefinedや空文字でないことを確認
            if (text && text.trim() !== '') {
              setTodos([...todos, text.trim()]); // 入力されたタスクを追加
            } else {
              Alert.alert('タスク名が入力されていません');
            }
          },
        },
      ],
      'plain-text'
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <Header title="Todoリスト" />
      <View style={styles.container}>
        <TodoList todos={todos} />
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
