import { FlashList } from '@shopify/flash-list';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';

import { AddButton, Header, TodoItem } from '@/components';
import { useTodoContext } from '@/context';


export const TodoScreen = () => {
    const { todos, setTodos } = useTodoContext();

    // アイテムの追加
    const handleAddItem = () => {
        const newTodo: TodoProps = { title: `New Item ${todos.length + 1}`, isChecked: false };
        setTodos([...todos, newTodo]);
    };

    // アイテムの削除
    const handleDeleteItem = (index: number) => {
        const itemToDelete = todos[index];

        Alert.alert(
            `「${itemToDelete.title}」の削除確認`, // アラートのタイトル
            `本当に「${itemToDelete.title}」を削除しますか?`,
            [
                {
                    text: "キャンセル",
                    style: "cancel"
                },
                {
                    text: "削除",
                    style: "destructive",
                    onPress: () => {
                        setTodos(todos.filter((_, i) => i !== index));
                    }
                }
            ],
            { cancelable: false }
        );
    };

    // チェックボックスの状態を変更
    const handleCheckItem = (index: number) => {
        setTodos(todos.map((_, i) => {
            if (i === index) {
                return { ..._, isChecked: !_.isChecked };
            }
            return _;
        }));
    };

    return (
        <SafeAreaView style={styles.safearea}>
            <Header />
            <FlashList
                data={todos}
                renderItem={({ item, index }) => (
                    <TodoItem
                        title={item.title}
                        isChecked={item.isChecked}
                        onCheck={() => handleCheckItem(index)}
                        onDelete={() => handleDeleteItem(index)} // 削除ボタンが押されたときにhandleDeleteItemを呼び出す
                    />
                )}
                estimatedItemSize={200}
            />
            <AddButton onPress={handleAddItem} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        backgroundColor: 'white',
        flex: 1
    }
});
