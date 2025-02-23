import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
