import { createDrawerNavigator } from '@react-navigation/drawer';

import { TopTabs } from './TopTabs';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TopTabs} />
        </Drawer.Navigator>
    )
}