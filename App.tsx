import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TopTabs } from '@/navigations';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <TopTabs />
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
