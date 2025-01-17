import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';

import { FinishedScreen, UnfinishedScreen } from '@/screens';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
        <SafeAreaView style={styles.safearea}>
            <Tab.Navigator>
                <Tab.Screen name="未完了" component={UnfinishedScreen} />
                <Tab.Screen name="完了済み" component={FinishedScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safearea: {
        backgroundColor: "white",
        flex: 1
    },
})