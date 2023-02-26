import React from 'react';
import BottomNavigator from './navigation/BottomNavigator';

import bottomTabs from './meta/bottom_navigate_meta-data';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigator tabs={bottomTabs} />
    </NavigationContainer>
  );
}

export default App;
