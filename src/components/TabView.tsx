import { Icon } from "@rneui/themed"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Tab = () => {
    return(
        <TouchableOpacity>
            <View>
                <Icon name="checkbox-blank-outline" color={color} type='material-community' size={20} />
                <Text>未完了</Text>
            </View>
        </TouchableOpacity>
    )
}

const TabBar = () => {
    return(
        <View style={styles.tabBar}>
            <Tab></Tab>
            <Tab></Tab>
        </View>
    )
}

export const TabView = () => {
    return(
        <TabBar />
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'red',
        borderBlockColor: '#d1d5db',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        height: 30
    },
    tab: {
        height: 30
    }
})