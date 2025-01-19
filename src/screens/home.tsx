import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AppContext } from '@/context';

// Home画面コンポーネント
// @ts-ignore
export function HomeScreen({ navigation }) {
    // コンテキストの取得
    const appContext = useContext(AppContext);
    if (!appContext) return null;
    const { login, setLogin } = appContext;

    // UI
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home画面</Text>
            <Button
                title='Detail画面に遷移'
                onPress={() => navigation.navigate('Detail画面')}
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