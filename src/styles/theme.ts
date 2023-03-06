import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightTheme = {
  navigation: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FFFFFF',
      text: '#121212',
      background: '#FFFFFF',
      border: '#FFFFFF',
      card: '#F2F2F2',
    },
  },
  background: {
    primary: '#ffffff',
    secondary: '#f2f2f2',
  },
  text: {
    primary: '#202124',
  },
  button: {
    primary: { background: '#2f80ed', text: '#000000' },
  },
};

export const darkTheme = {
  navigation: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#121212',
      text: '#FFFFFF',
      background: '#121212',
      border: '#212121',
      card: '#212121',
    },
  },
  background: {
    primary: '#202124',
    secondary: '#bebebe',
  },
  text: {
    primary: '#eff0f5',
  },
  button: {
    primary: { background: '#2f80ed', text: '#000000' },
  },
};
