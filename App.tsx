import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { TodoScreen } from '@/screens';

export default function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <TodoScreen />
          </SafeAreaProvider>
        </NavigationContainer>
    </GestureHandlerRootView>
  );
}