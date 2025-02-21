import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { TodoScreen } from '@/screens';
import { TodoProvider } from '@/context';

function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <TodoProvider>
          <NavigationContainer>
            <SafeAreaProvider>
              <StatusBar style="auto" />
              <TodoScreen />
            </SafeAreaProvider>
          </NavigationContainer>
        </TodoProvider>
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;