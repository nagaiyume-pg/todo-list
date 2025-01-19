import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { TodoItem, AddButton } from '@/components';

interface Todo {
    title: string;
    isChecked: boolean;
}

const initialData: Todo[] = [
    { title: 'First Item', isChecked: false },
    { title: 'Second Item', isChecked: true },
    { title: 'Third Item', isChecked: false },
    { title: 'Fourth Item', isChecked: true },
    { title: 'Fifth Item', isChecked: false },
];

const TodoScreen = () => {
    const [data, setData] = useState<Todo[]>(initialData);

    const handleAddItem = () => {
        const newItem: Todo = { title: `New Item ${data.length + 1}`, isChecked: false };
        setData((prevData) => [...prevData, newItem]);
    };

    const handleDeleteItem = (index: number) => {
        setData((prevData) => prevData.filter((_, i) => i !== index));
    };

    const handleCheckItem = (index: number) => {
        setData((prevData) => {
        const updatedData = [...prevData];
        updatedData[index].isChecked = !updatedData[index].isChecked;
        return updatedData;
        });
    };

    const incompleteTodos = data.filter((todo) => !todo.isChecked);
    const completedTodos = data.filter((todo) => todo.isChecked);

    return (
        <SafeAreaView style={styles.safearea}>
        <StatusBar style="auto" />
        <View style={styles.container}>
            <FlashList
            data={incompleteTodos}
            renderItem={({ item, index }) => (
                <TodoItem
                title={item.title}
                isChecked={item.isChecked}
                onCheck={() => handleCheckItem(index)}
                onDelete={() => handleDeleteItem(index)}
                />
            )}
            estimatedItemSize={200}
            />
        </View>
        <AddButton onPress={handleAddItem} />
        </SafeAreaView>
    );
};

const CompletedScreen = () => {
    const [data, setData] = useState<Todo[]>(initialData);

    const handleCheckItem = (index: number) => {
        setData((prevData) => {
            const updatedData = [...prevData];
            updatedData[index].isChecked = !updatedData[index].isChecked;
            return updatedData;
        });
    };

    const completedTodos = data.filter((todo) => todo.isChecked);

    return (
        <SafeAreaView style={styles.safearea}>
        <StatusBar style="auto" />
        <View style={styles.container}>
            <FlashList
            data={completedTodos}
            renderItem={({ item, index }) => (
                <TodoItem
                title={item.title}
                isChecked={item.isChecked}
                onCheck={() => handleCheckItem(index)}
                onDelete={() => {}}
                />
            )}
            estimatedItemSize={200}
            />
        </View>
        <AddButton onPress={() => {}} />
        </SafeAreaView>
    );
};

// タブナビゲーションの設定
const Tab = createMaterialTopTabNavigator();

export const TodoTabs  = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Incomplete"
            screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: '#3b82f6' },
            }}
        >
            <Tab.Screen name="Incomplete" component={TodoScreen} />
            <Tab.Screen name="Completed" component={CompletedScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    },
    itemText: {
        fontSize: 16,
    },
    strikeThrough: {
        textDecorationLine: 'line-through',
        color: '#9e9e9e',
    },
});