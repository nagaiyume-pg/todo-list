import React, { useState } from "react";
import { Button, Input } from "@rneui/themed";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import { useTodoContext } from "@/contexts";

// TodoFormコンポーネント
export const TodoForm = ({ navigation }: any) => {
    const { todos, setTodos } = useTodoContext();
    const [task, setTask] = useState<string>("");

    const handleAddTask = () => {
        if (!task.trim()) return; // 空白タスクを追加しない

        const newTodo = {
            id: String(todos.length ? Math.max(...todos.map((todo) => Number(todo.id))) + 1 : 0),
            title: task.trim(),
            completed: false,
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTask(""); // 入力後、テキストフィールドをクリア
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.container}>
                <Text style={styles.title}>Todo Form</Text>
                <Input
                    placeholder="タスク名"
                    value={task}
                    onChangeText={setTask}
                />
                <Button title="追加" onPress={handleAddTask} />
            </View>
        </SafeAreaView>
    );
};

// スタイルの定義
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center", // 横方向も中央に配置
    },
    title: {
        fontSize: 24, // タイトル文字のサイズ
        fontWeight: "bold", // 太字
        marginBottom: 20, // ボタンとの間にスペースを追加
    },
});
