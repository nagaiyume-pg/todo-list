import { useCallback, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, View } from 'react-native';
import { SceneMap, TabBar, TabView, type TabBarProps } from 'react-native-tab-view';

import { AddButton, Header, TodoList } from '@/components';
import { useTodoContext } from '@/context';

interface Route {
    key: string,
    title: string
}

export const TodoScreen = () => {
    const { todos, setTodos } = useTodoContext();
    const [index, onIndexChange] = useState(0);
    const [routes] = useState<Route[]>([
        { key: 'incomplete', title: '未完成' },
        { key: 'completed', title: '完成済み' },
    ]);

    /**
     * Todoを追加する関数
     */
    const handleAddTodo = () => {
        const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
        const newTodo: TodoProps = {
            id: newId,
            title: `New Item ${newId + 1}`,
            isChecked: false,
        };
        setTodos([...todos, newTodo]);
        console.log("Add Todo!")
    }

    /**
     * Todoを削除する関数
     * @param {number} id TodoのID
     */
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

    /**
     * Todoを未完了・完了を切り替える関数
     * @param {number} id TodoのID
     */
    const handleCheckTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
        ));
    };

    const incompleteTodos = todos.filter(todo => !todo.isChecked);
    const completedTodos = todos.filter(todo => todo.isChecked);

    const renderScene = SceneMap({
        incomplete: () => <TodoList todos={incompleteTodos} onCheck={handleCheckTodo} onDelete={handleDeleteTodo} />,
        completed: () => <TodoList todos={completedTodos} onCheck={handleCheckTodo} onDelete={handleDeleteTodo} />
    })

    const renderTabBar = (props: TabBarProps<Route>) => {
        return(
            <TabBar
                {...props}  // `TabView` コンポーネントから受け取ったすべてのプロパティをスプレッド構文で渡す
                scrollEnabled={false}  // タブバーのスクロールを無効にする
                indicatorStyle={styles.indicator}  // インジケーター（アクティブタブ下のライン）のスタイルを設定
                style={styles.tabbar}  // TabBar全体のスタイルを設定
                tabStyle={styles.tabStyle}  // 個々のタブのスタイルを設定
                activeColor='#38bdf8'
                inactiveColor='gray'
            />
        )
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header />
                <TabView<Route>
                    navigationState={{
                        index,
                        routes,
                    }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={onIndexChange}
                />
                <AddButton onPress={handleAddTodo} />
            </View>
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
    tabbar: {
        // backgroundColor: '#2563eb',
        backgroundColor: 'white',
        height: 30,
    },
    tabStyle: {
        flex: 1,
        padding: 0,
        minHeight: 30,
    },
    indicator: {
        backgroundColor: '#38bdf8',
        height: 4
    },
});
