import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';
import Routes from './Routes/routes';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Provider>

    // <SafeAreaView style={{flex: 1}}>
    //   {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
    //   <Routes />
    // </SafeAreaView>
  );
};
export default App;
