import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => contador > 0 && setContador(contador - 1);
  const zerar = () => setContador(0);

  return (
    <View style={styles.container}>
       <Text style={styles.contadorText}>Contador de coisas </Text>
      <Text style={styles.contadorText}>{contador}</Text>

      <TouchableOpacity style={[styles.button, styles.buttonIncrementar]} onPress={incrementar}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonDecrementar]} onPress={decrementar}>
        <Text style={styles.buttonText}>Decrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonZerar]} onPress={zerar}>
        <Text style={styles.buttonText}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}
