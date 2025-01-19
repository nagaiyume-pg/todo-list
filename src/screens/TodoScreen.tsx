import { FlashList } from '@shopify/flash-list';
import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';

import { AddButton, Header, TodoItem } from '@/components';

const initialData: TodoProps[] = [];

export const TodoScreen = () => {
    const [data, setData] = useState<TodoProps[]>(initialData);  // useStateで型を指定

    // アイテムの追加
    const handleAddItem = () => {
        const newItem: TodoProps = { title: `New Item ${data.length + 1}`, isChecked: false };
        setData(prevData => [...prevData, newItem]);
    };

    // アイテムの削除
    const handleDeleteItem = (index: number) => {
        const itemToDelete = data[index]; // 削除対象のアイテムを取得

        Alert.alert(
            "削除確認", // アラートのタイトル
            `本当に「${itemToDelete.title}」を削除しますか?`, // タスク名を含めたメッセージ
            [
                {
                    text: "キャンセル", // キャンセルボタン
                    style: "cancel"
                },
                {
                    text: "削除", // 削除ボタン
                    style: "destructive", // 削除ボタンを赤色に
                    onPress: () => {
                        setData(prevData => prevData.filter((_, i) => i !== index)); // アイテムを削除
                    }
                }
            ],
            { cancelable: false } // 背景をタップしてアラートを閉じられないように
        );
    };

    // チェックボックスの状態を変更
    const handleCheckItem = (index: number) => {
        setData(prevData => {
            const updatedData = [...prevData];
            updatedData[index].isChecked = !updatedData[index].isChecked;
            return updatedData;
        });
    };

    return (
        <SafeAreaView style={styles.safearea}>
            <Header />
            <FlashList
                data={data}
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
