import { SafeAreaView, StyleSheet, Alert, View } from 'react-native';
import { AddButton, Header, TabsView, TodoList } from '@/components';
import { useTodoContext } from '@/context';

export const TodoScreen = () => {
    const { todos, setTodos } = useTodoContext();

    const handleAddTodo = () => {
        const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
        const newTodo: TodoProps = {
            id: newId,
            title: `New Item ${newId + 1}`,
            isChecked: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (id: number) => {
        const TodoToDelete = todos.find(todo => todo.id === id);
        if (TodoToDelete) {
            Alert.alert(
                `「${TodoToDelete.title}」の削除確認`,
                `本当に「${TodoToDelete.title}」を削除しますか?`,
                [
                    { text: 'キャンセル', style: 'cancel' },
                    {
                        text: '削除',
                        style: 'destructive',
                        onPress: () => {
                            setTodos(todos.filter(todo => todo.id !== id));
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    };

    const handleCheckTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
        ));
    };

    const incompleteTodos = todos.filter(todo => !todo.isChecked);
    const completedTodos = todos.filter(todo => todo.isChecked);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header />
                <TabsView />
                <TodoList
                    todos={incompleteTodos}
                    onCheck={handleCheckTodo}
                    onDelete={handleDeleteTodo}
                />
                </View>
            <AddButton onPress={handleAddTodo} />
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
    }
});
