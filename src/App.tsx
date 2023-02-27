import React from 'react';
import BottomNavigator from './navigation/BottomNavigator';

import bottomTabs from './meta/bottom_navigate_meta-data';
import { NavigationContainer } from '@react-navigation/native';
import Login from './page/Login';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Login />
      {/* <BottomNavigator tabs={bottomTabs} /> */}
    </NavigationContainer>
  );
}

export default App;
