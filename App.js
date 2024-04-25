import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import CustomNavigationBar from './src/CustomNavigationBar';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App=() =>{
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          header: (props) => <CustomNavigationBar{...props}/>,
        }}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;


