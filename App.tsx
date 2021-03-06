import React from 'react';
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { Signin } from './src/pages/Signin';
import { theme } from './src/global/styles/theme';
import { Background } from './src/components/Background';
import { Home } from './src/pages/Home';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider >
    </Background>
  );
}
