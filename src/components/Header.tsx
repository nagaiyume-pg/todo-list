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
        borderBottomColor: '#d1d5db',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        height: 50,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})