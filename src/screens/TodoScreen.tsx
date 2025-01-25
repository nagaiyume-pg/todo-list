import { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, View, Animated } from 'react-native';
import { SceneMap, TabBar, TabView, type TabBarIndicatorProps, type TabBarProps } from 'react-native-tab-view';
import { useLocale } from '@react-navigation/native';

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
    ])
     const { direction } = useLocale();  // ロケール（文字の方向）を取得

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
    };

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
                contentContainerStyle={styles.contentContainer}  // TabBar内のコンテンツコンテナ部分のスタイルを設定
                tabStyle={styles.tabStyle}  // 個々のタブのスタイルを設定
                gap={200}  // タブ間のスペースを200に設定（タブ同士の間隔を広げる）
                direction={direction}
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
                    direction={direction}
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
        backgroundColor: '#3f51b5',
        height: 30,
    },
    contentContainer: {
        paddingLeft: 10,
        paddingRight: 150,
        width: 'auto',
    },
    tabStyle: {
        padding: 0,
        paddingLeft: 1,
        minHeight: 30,
        width: 'auto',
    },
    indicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
});
