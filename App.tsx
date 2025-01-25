import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { TodoScreen } from '@/screens';
import { TodoProvider } from '@/context';
import { TestScreen } from '@/screens/TestScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <TodoProvider>
          <NavigationContainer>
            <SafeAreaProvider>
              <StatusBar style="auto" />
              <TestScreen />
            </SafeAreaProvider>
          </NavigationContainer>
        </TodoProvider>
    </GestureHandlerRootView>
  );
}