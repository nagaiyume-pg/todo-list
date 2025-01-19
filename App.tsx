import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from '@/context';
import Main from '@/navigations';

// アプリ
function App() {
  return (
    <NavigationContainer>
      <AppProvider>
          <Main/>
      </AppProvider>
    </NavigationContainer>
  );
}

export default App;