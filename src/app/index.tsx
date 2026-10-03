import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hejka!</Text>
      <Image
        source={require('../../assets/images/dog.jpg')}
        style={styles.dog}
        resizeMode="cover"
        accessibilityLabel="Zdjęcie psa"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dog: {
    width: 280,
    height: 280,
    borderRadius: 20,
  },
});
