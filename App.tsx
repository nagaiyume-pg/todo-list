import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { DrawerNav } from '@/navigations';

export default function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}