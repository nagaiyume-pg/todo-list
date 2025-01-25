import { useLocale } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import { TodoList, TodoListProps } from './TodoList';
import { useTodoContext } from '@/context';

interface Route {
    key: string;
    title: string;
};

export const TabsView = (props: TodoListProps) => {
    const { direction } = useLocale();
    const [index, onIndexChange] = React.useState(0);
    const [routes] = React.useState([
        { key: 'article', title: 'Article' },
        { key: 'contacts', title: 'Contacts' },
    ]);
    const { todos } = useTodoContext();
    const { onCheck, onDelete } = props;

    const renderScene = SceneMap({
        albums: () => <TodoList todos={todos} onCheck={onCheck} onDelete={onDelete} />,
        contacts: () => <TodoList todos={todos}onCheck={onCheck} onDelete={onDelete} />,
    });

    const renderTabBar: React.ComponentProps<
        typeof TabView<Route>
    >['renderTabBar'] = (props) => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            contentContainerStyle={styles.tabbarContentContainer}
            tabStyle={styles.tabStyle}
            gap={20}
            direction={direction}
        />
    );

    return (
        <TabView<Route>
            navigationState={{
                index,
                routes,
            }}
            direction={direction}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={onIndexChange}
        />
    );
};

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#3f51b5',
    },
    tabbarContentContainer: {
        paddingHorizontal: 10,
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    tabStyle: {
        width: 'auto',
    },
});
