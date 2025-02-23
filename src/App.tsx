import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import '../wdyr';

import { TodoScreen } from '@/screens';
import { TodoProvider } from '@/context';

function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <TodoProvider>
        <SafeAreaProvider>
          <TodoScreen />
        </SafeAreaProvider>
      </TodoProvider>
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  console.log("storybook");
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
