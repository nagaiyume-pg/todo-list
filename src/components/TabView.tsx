import { Icon } from "@rneui/themed"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Tab = () => {
    return (
        <View style={styles.tab}>
            <TouchableOpacity style={styles.labelButton}>
                <View style={styles.label}>
                    <Icon name="checkbox-blank-outline" color={'red'} type='material-community' size={20} />
                    <Text style={styles.labelText}>未完了</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const Tabbar = () => {
    return (
        <View style={styles.tabbar}>
            <Tab /><Tab />
        </View>
    );
}

export const TabView = () => {
    return (
        <Tabbar />
    );
}

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: 'white',
        borderBlockColor: '#d1d5db',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        height: 30,
    },
    tab: {
        backgroundColor: 'blue',
        flex: 1,
        height: 30,
    },
    labelButton: {
        backgroundColor: 'yellow',
        flexDirection: 'row', // アイコンとテキストを横並びにする
        alignItems: 'center', // アイコンとテキストを縦方向に中央揃え
        paddingHorizontal: 10, // アイコンとテキストにパディングを追加
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center', // アイコンとテキストを縦方向に中央揃え
        gap: 5, // アイコンとテキストの間隔
    },
    labelText: {
        fontSize: 14,
    },
});
