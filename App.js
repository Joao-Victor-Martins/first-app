import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import InfoInput from './components/InfoInput';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <View style={styles.container}>
      <InfoInput />
      </View>
      <Footer />
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
