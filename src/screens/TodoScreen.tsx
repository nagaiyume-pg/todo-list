import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AddButton, Header, TodoItem } from '@/components';
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

    const renderTabContent = (todosList: TodoProps[]) => (
        <FlashList
            data={todosList}
            renderItem={({ item }) => (
                <TodoItem
                    title={item.title}
                    isChecked={item.isChecked}
                    onCheck={() => handleCheckTodo(item.id)}
                    onDelete={() => handleDeleteTodo(item.id)}
                />
            )}
            estimatedItemSize={200}
        />
    );

    const renderScene = SceneMap({
        incomplete: () => renderTabContent(incompleteTodos),
        completed: () => renderTabContent(completedTodos),
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'incomplete', title: '未完了' },
        { key: 'completed', title: '完了済み' },
    ]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        style={styles.tabBar} // タブバーのスタイル
                        indicatorStyle={styles.indicator} // インジケーターのスタイル
                        activeColor="#6b7280"
                        inactiveColor="#d1d5db"
                        tabStyle={styles.tab}
                    />
                )}
            />
            <AddButton onPress={handleAddTodo} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white',
        flex: 1,
    },
    tabBar: {
        backgroundColor: 'white',
        elevation: 0,
        height: 30
    },
    tab: {
        minHeight: 30,
        padding: 0
    },
    indicator: {
        backgroundColor: '#3b82f6'
    }
});
