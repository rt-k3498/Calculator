import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SimpleCalc from './src/screens/simple_calc';
import ScientificCalc from './src/screens/scientific_calc';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = 'Arithmetic Calculator' component = {SimpleCalc}/>
        <Drawer.Screen name = 'Scientific Calculator' component = {ScientificCalc}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
