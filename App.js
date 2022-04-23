import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
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
  );
};
export default App;
