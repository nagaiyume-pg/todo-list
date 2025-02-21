import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FinishedScreen, UnfinishedScreen } from '@/screens';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="未完了" component={UnfinishedScreen} />
      <Tab.Screen name="完了済み" component={FinishedScreen} />
    </Tab.Navigator>
  );
};
