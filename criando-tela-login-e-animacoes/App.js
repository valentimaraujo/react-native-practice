import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard
} from 'react-native';

export default function App() {
  const [logoAnimated] = useState(new Animated.ValueXY({ x: 280, y: 84 }));
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 500 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 6
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800
      })
    ]).start();
  }, []);

  const keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(logoAnimated.x, {
        toValue: 180,
        duration: 100
      }),
      Animated.timing(logoAnimated.y, {
        toValue: 54,
        duration: 100
      })
    ]).start();
  }

  const keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(logoAnimated.x, {
        toValue: 280,
        duration: 100
      }),
      Animated.timing(logoAnimated.y, {
        toValue: 84,
        duration: 100
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logoAnimated.x,
            height: logoAnimated.y,
            resizeMode: "center"
          }}
          source={require('./assets/projectavatar.png')}
        />
      </View>
      <Animated.View style={[
        styles.container,
        {
          opacity: opacity,
          transform: [{
            translateY: offset.y
          }]
        }
      ]}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={() => {
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {
          }}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnRegisterText}>Criar Conta Gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    marginBottom: 15,
    color: "#666",
    fontSize: 18,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: "#2c3753",
    padding: 12,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  btnSubmitText: {
    color: "#FFF",
    fontSize: 18
  },
  btnRegister: {
    marginTop: 18,
    padding: 12,
    width: "90%"
  },
  btnRegisterText: {
    color: "#1e90ff",
    textAlign: "center"
  }
})
