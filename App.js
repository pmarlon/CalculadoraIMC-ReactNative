import React, { useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState('0.00');
  const [mensagem, setMensagem] = useState('');

  function limparInputs() {
    setPeso('');
    setAltura('');
    setResultado('0.00');
    setMensagem('');
  }

  function testarIMC(imc){

      if (imc < 18.5) {
      setMensagem('Abaixo do Peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem('Peso Normal');
    } else if (imc >= 24.9 && imc <= 29.9) {
      setMensagem('Sobrepeso');
    } else if (imc >= 30 && imc < 35) {
      setMensagem('Obesidade Grau I');
    } else if (imc >= 35 && imc < 40) {
      setMensagem('Obesidade Grau II');
    } else if (imc >= 40) {
      setMensagem('Obesidade Grau III ou Mórbida');
    } else {
      setMensagem('Preencha os dados corretamente.');
    }
  }

  const calcularIMC = () => {
    if (Number(altura) >= 100) {
      Number(altura / 100);
      const imc =
        Number(peso) / ((Number(altura) / 100) * (Number(altura) / 100));
        setResultado(imc.toFixed(2));
        testarIMC(imc);
    } else {
      const imc = Number(peso) / (Number(altura) * Number(altura));
      setResultado(imc.toFixed(2));  
      testarIMC(imc);
    }

  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoTitulo}>CALCULADORA DE IMC</Text>

        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={(valor) => {
            setAltura(valor);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={(valor) => {
            setPeso(valor);
          }}
        />
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={limparInputs}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textoResultado}> IMC = {resultado}</Text>
      </View>

      <View>
        <Text style={styles.textoMensagem}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    marginTop: 20,
  },
  textoTitulo: {
    fontWeight: 'bolder',
    fontSize: 20,
    padding: 10,
    alignSelf: 'center',
  },
  input: {
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'red',
    fontSize: 18,
    padding: 8,
    marginBottom: 15,
    color: '#787878',
  },
  linha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 20,
    padding: 10,
    marginBottom: 5,
    borderRadius: 50,
    fontSize: 20,
  },
  textoBotao: {
    fontWeight: 'bolder',
  },
  textoResultado: {
    alignSelf: 'center',
    padding: 20,
    fontWeight: 'bolder',
    fontSize: 20,
  },
  textoMensagem: {
    color: '#dc3545',
    fontSize: 25,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
});
