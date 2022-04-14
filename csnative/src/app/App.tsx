import React from 'react';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import { StatusBarType } from '../types';
import { theme } from '../themes';
import { store } from '../redux/store';

import { Routes } from '../routes';

const _fetchResourcesAsync = async () => {
  const images = [require('../assets/logo-primary.png')];
  const cacheImages = images.map(image => {

    return Asset.fromModule(image).downloadAsync();
  });
  await Promise.all(cacheImages);
  return Font.loadAsync({
    'Segoe-UI': require('../assets/Segoe-UI.ttf'),
    'Segoe-UI-SemiBold': require('../assets/Segoe-UI-SemiBold.ttf')
  })
}

export default function App() {
  const statusBarStyle: StatusBarType = theme.colors.statusBar as StatusBarType;
  StatusBar.setBarStyle(statusBarStyle, true);
  const [resourcesLoaded, setLoaded] = React.useState(false);
  return resourcesLoaded ?
    (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StatusBar />
          <Routes />
        </ThemeProvider>
      </Provider>
    ) :
    (
      <AppLoading
        startAsync={_fetchResourcesAsync}
        onFinish={() => setLoaded(true)}
        onError={console.warn}
      />
    )
}