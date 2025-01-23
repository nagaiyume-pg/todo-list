import { SafeAreaView, StyleSheet, Alert, View } from 'react-native';
import { AddButton, Header, TabView, TodoList } from '@/components';
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
                <TabView />
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
    },
    tabBar: {
        backgroundColor: 'white',
        elevation: 0,
        height: 30,
        borderBottomColor: '#d1d5db',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        // 影を無効化する
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowOffset: {"height": 0,"width": 0},
        shadowRadius: 0
    },
    tab: {
        minHeight: 30,
        padding: 0
    },
    indicator: {
        backgroundColor: '#3b82f6'
    },
    label: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        height: 30
    },
    labelText: {
        fontSize: 14,
    },
});
