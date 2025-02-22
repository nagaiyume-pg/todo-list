import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import './wdyr'

import { TodoScreen } from '@/screens';

function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <SafeAreaProvider>
        <TodoScreen />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
