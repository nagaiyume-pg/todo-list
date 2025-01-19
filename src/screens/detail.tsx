import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AppContext } from '@/context'

// Detail画面コンポーネント
// @ts-ignore
export function DetailScreen({ navigation }) {
    // コンテキストの取得
    const appContext = useContext(AppContext);
    if (!appContext) return null;
    const { login, setLogin } = appContext;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail画面</Text>
            <Button
                title='Home画面に戻る'
                onPress={() => navigation.goBack()}
            />
            <Text/>
            <Text>
                {login ? 'Login' : 'Logout'}
            </Text>
            <Button
                title={login ? 'Logout' : 'Login'}
                onPress={() => setLogin(!login)}
            />
        </View>
    );
}