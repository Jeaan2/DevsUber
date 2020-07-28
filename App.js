import React from 'react';
import {SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './src/store';

import MainStack from './src/navigators/MainStack';

const Teste = () => {
  return (
    <SafeAreaView>
       <Text>...</Text>
    </SafeAreaView>
  );
}

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <MainStack />
    </PersistGate>
  </Provider>
)