import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Store from '../calc_front/src/store';
import { Provider } from 'react-redux';
import Screen from '../calc_front/src/components/screen';
import NumberPad from '../calc_front/src/components/numberpad';

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Screen/>
        <NumberPad/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
