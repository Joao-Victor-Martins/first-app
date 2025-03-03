import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import InfoInput from './components/InfoInput';


export default function App() {
  return (
    <>
      <View style={styles.container}>
      <InfoInput />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

 

  container: {
    flex: 1,
    backgroundColor: '#ffe8c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
