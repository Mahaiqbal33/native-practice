
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('./assets/welcomImage.jpg')}
      resizeMode="cover"
      style={styles.image}
    >
      {/* Overlay */}
      <LinearGradient
        colors={['rgba(183, 7, 107, 0.7)', 'rgba(255, 255, 255, 0.5)']}
        style={StyleSheet.absoluteFill}
      >
        <View style={styles.overlayContent}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.para}>Create Your own Happiness </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Reseller</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Supplier</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  overlayContent: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: 'flex-end',
    paddingBottom: 150
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  para: {
    color: 'white',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'left',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical:8
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center'
  },
});

export default App;
