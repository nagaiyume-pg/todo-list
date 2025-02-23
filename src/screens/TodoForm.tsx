import { Button } from "@rneui/themed"
import { StyleSheet, Text, View } from "react-native"

// TodoFormコンポーネント
export const TodoForm = ({ navigation }: any) => {
    // navigationプロパティを受け取ることで、画面遷移機能を使えるようにする
    return (
        <View style={styles.container}>
            {/* TodoFormのタイトル */}
            <Text style={styles.title}>Todo Form</Text>

            {/* 戻るボタン */}
            {/* ボタンを押したときに前の画面に戻るようにする */}
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

// スタイルの定義
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // コンテンツを中央に配置
        alignItems: 'center', // 横方向も中央に配置
    },
    title: {
        fontSize: 24, // タイトル文字のサイズ
        fontWeight: 'bold', // 太字
        marginBottom: 20, // ボタンとの間にスペースを追加
    }
})
