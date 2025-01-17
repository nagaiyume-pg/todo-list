import { createDrawerNavigator } from '@react-navigation/drawer';

import { TopTabs } from './TopTabs';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="TodoList">
            <Drawer.Screen name="TodoList" component={TopTabs} />
        </Drawer.Navigator>
    );
}