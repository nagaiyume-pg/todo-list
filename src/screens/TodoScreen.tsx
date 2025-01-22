import { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Icon } from '@rneui/themed';
import { Text } from 'react-native';

import { AddButton, Header, TodoList } from '@/components';
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

    const renderScene = SceneMap({
        incomplete: () => <TodoList todosList={incompleteTodos} onCheck={handleCheckTodo} onDelete={handleDeleteTodo} />,
        completed: () =>    <TodoList todosList={completedTodos} onCheck={handleCheckTodo} onDelete={handleDeleteTodo} />,
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
                commonOptions={{
                    label: ({ labelText, color}) => (
                        <View style={styles.label}>
                            {labelText == '未完了' ?
                                <Icon name="checkbox-blank-outline" color={color} type='material-community' size={20} />
                                :
                                <Icon name="checkbox-outline" color={color} type='material-community' size={20} />
                            }
                            <Text style={{ color }}>{labelText}</Text>
                        </View>
                    ),
                }}
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
