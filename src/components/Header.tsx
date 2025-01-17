import { StyleSheet, View } from "react-native"

export const Header = () => {
    return(
        <View style={styles.header}></View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        flex: 1
    }
})