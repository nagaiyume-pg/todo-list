import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

// import '../wdyr';

import { TodoProvider } from '@/context';
import { RootStackNav } from './navigations';

function App() {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <NavigationContainer>
        <TodoProvider>
          <SafeAreaProvider>
            <RootStackNav />
          </SafeAreaProvider>
        </TodoProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  console.log("storybook");
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
