import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screeens/Onboarding';
import Dashboard from "./src/screeens/Dashboard";
import HamburgerPreview from './src/components/HamburgerPreview';
import SearchPage from './src/screeens/SearchPage';
import Dashboardn from './src/screeens/Dashboardn';
import ScrollableDashboard from './src/screeens/ScrollableDashBoard';
import UsingFlatList from './src/testing/UsingFlatList';
import MorbiusDetails from './src/screeens/movieDetails/MorbiusDetails';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false}}>
       <Stack.Screen name='Onboarding' component={Onboarding} options={{headerShown: false}}/> 
       <Stack.Screen name='Dashboard' component={ScrollableDashboard}/>
       <Stack.Screen name='MorbiusDetails' component={MorbiusDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
