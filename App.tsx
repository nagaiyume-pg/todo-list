import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TopTabs } from '@/navigations';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={styles.safearea}>
            <StatusBar style="auto" />
            <TopTabs />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: 'white',
    flex: 1
  }
});
