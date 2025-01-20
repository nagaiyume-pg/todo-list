import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { TodoScreen } from '@/screens';
import { TodoProvider } from '@/context';
import { StrictMode } from 'react';

export default function App() {
  return (
    <StrictMode>
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
    </StrictMode>
  );
}