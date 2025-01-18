import { Header } from '@/components';
import { FlashList } from '@shopify/flash-list';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const DATA = [
    { title: "First Item" },
    { title: "Second Item" },
    { title: "Third Item" },
    { title: "Fourth Item" },
    { title: "Fifth Item" },
    { title: "Sixth Item" },
    { title: "Seventh Item" },
    { title: "Eighth Item" },
    { title: "Ninth Item" },
    { title: "First Item" },
    { title: "Second Item" },
    { title: "Third Item" },
    { title: "Fourth Item" },
    { title: "Fifth Item" },
    { title: "Sixth Item" },
    { title: "Seventh Item" },
    { title: "Eighth Item" },
    { title: "Ninth Item" }
];

interface ItemProps {
    title: string; // titleは文字列であるべきです
}

export const Item = ({ title }: ItemProps) => { // propsとしてtitleを受け取ります
    return (
        <View style={styles.item}>
            <Text>{title}</Text>
        </View>
    );
}

export const TodoScreen = () => {
    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Header />
                <FlashList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />} // renderItemでItemコンポーネントを使用
                    estimatedItemSize={200}
                />
            </View>
            <IconButton
                containerColor={'#3b82f6'}
                icon="plus"
                iconColor={"white"}
                size={50}
                style={styles.addButton}
                onPress={() => console.log('Pressed')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safearea: {
        backgroundColor: 'white',
        flex: 1
    },
    container:{
        backgroundColor: 'white',
        flex: 1
    },
    item: {
        borderBottomColor: '#d1d5db',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flex: 1,
        height: 70,
    },
    addButton: {
        bottom: 20,
        right: 20,
        position: 'absolute'
    }
});