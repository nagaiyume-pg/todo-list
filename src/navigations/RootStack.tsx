import { createStackNavigator } from "@react-navigation/stack";

import { TodoScreen, TodoForm } from "@/screens";

const Stack = createStackNavigator();

export const RootStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="TodoScreen"
                component={TodoScreen}
            />
            <Stack.Screen
                name="TodoForm"
                component={TodoForm}
                options={{
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    )
};