import { StyleSheet, Text, View } from "react-native"

export const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todoリスト</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        display: 'flex',
        height: 50,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})