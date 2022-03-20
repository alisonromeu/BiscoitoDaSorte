import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'A persistência é o caminho do êxito.',
    'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
    'No meio da dificuldade encontra-se a oportunidade.',
    'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
    'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.',
    'Acredite que você pode, assim você já está no meio do caminho.',
    'Não importa o que você decidiu. O que importa é que isso te faça feliz.',
    'Se a caminhada está difícil, é porque você está no caminho certo.'
  ]

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(`" ${frases[numeroAleatorio]} "`);
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito() {
    setTextoFrase('');
    setImg(require('./src/biscoito.png'))
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Biscoito Motivacional</Text>

      <Image 
        source={img}
        style={styles.image}
      />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto} onPress={ quebraBiscoito }>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]} onPress={ reiniciarBiscoito }>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    marginBottom: 40,
    color: '#000',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
})