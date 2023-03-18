import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import useUserDeviceSetting from './hooks/useUserDeviceSetting';
import { darkTheme, lightTheme } from './styles/theme';
import { navigationRef } from './utils/RootNavigation';

function App(): JSX.Element {
  const { isDarkMode } = useUserDeviceSetting();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef} theme={theme.navigation}>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
