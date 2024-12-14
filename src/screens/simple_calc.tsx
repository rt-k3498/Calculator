import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Store from '../store';
import { Provider } from 'react-redux';
import Screen from '../components/screen';
import NumberPad from '../components/numberpad'; 

export default function simpleCalc() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Screen/>
          <NumberPad/>
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