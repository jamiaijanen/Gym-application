import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home() {

    return (
      <View style={styles.container}>
          <ImageBackground source={require('../images/background-image.png')} resizeMode="cover" style={styles.image} />
          <Text style={styles.text}>Welcome to use Gym application</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    text: {
        color: '#000000',
        fontSize: 25,
        position: 'absolute',
        textAlign: 'center',
        marginLeft: 50,
        backgroundColor: 'white',
        opacity: 0.6,
        borderRadius: 20,
        padding: 5,
        marginTop: 5
    }
  });