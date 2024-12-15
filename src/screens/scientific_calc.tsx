import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SciStore from '../sciStore';
import { Provider } from 'react-redux';
import SciScreen from '../components/sciScreen';
import SciNumberPad from '../components/sciNumberpad'; 

export default function ScientificCalc() {
    return (
      <Provider store={SciStore}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <SciScreen/>
          <SciNumberPad/>
        </View>
      </Provider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });