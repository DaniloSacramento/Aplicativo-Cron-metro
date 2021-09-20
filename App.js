import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

let timer = null;
let segundos = 0;
let minutos = 0;
let horas = 0; //Nao precisou ser uma State pq nao vai aparecer na tela.


export default function App() {

  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState('VAI');
  const [ultimo, setUltimo] = useState(null);


  function vai() {
    if (timer !== null) {
      //Vai parar o timer.
      clearInterval(timer);
      timer = null;
      setBotao('VAI')
    } else {
      //girar o timer 
      timer = setInterval(() => {
        segundos++;
        if (segundos == 60) {
          segundos = 0;
          minutos++;
        }
        if (minutos == 60) {
          minutos = 0;
          horas++;
        }
        let format =
          (horas < 10 ? '0' + horas : horas) + ':'
          + (minutos < 10 ? '0' + minutos : minutos) + ':'
          + (segundos < 10 ? '0' + segundos : segundos);

        setNumero(format); //passei a let format para a useState Numero



      }, 1000); //De 100 em 100 milisegundos vai chamar essa funcao
      setBotao('PARAR')






    }

  }

  function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
    setUltimo(numero);
    setNumero(0);
    segundos = 0;
    minutos = 0;
    horas = 0;
    setBotao('VAI');







  }










  return (
    <View style={styles.container}>

      <Image
        source={require('./src/crono.png')}
      />
      <Text style={styles.timer}> {numero}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}> {botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}> LIMPAR </Text>
        </TouchableOpacity>




      </View>
      <View style={styles.areaUlt}>
        <Text style={styles.textocorrida}>
          {ultimo ? ' Ultimo tempo: ' + ultimo : ''}
        </Text>


      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  }, timer: {
    marginTop: -160, //- se usa para subir
    fontSize: 45,
    fontWeight: 'bold', //negrito
    color: 'black'
  }, btnArea: {
    flexDirection: 'row', //um ao lado do outro
    marginTop: 130,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 10
  }, btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#00aeef'
  }, areaUlt: {
    marginTop: 40,

  }, textocorrida: {
    fontSize: 25,
    color: 'black',
    fontStyle: 'italic'
  }











})








