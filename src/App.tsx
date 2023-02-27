import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import { Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Suspense
          fallback={
            <View>
              <Text>Loading</Text>
            </View>
          }>
          <StackNavigator />
        </Suspense>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
