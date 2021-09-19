import React,{useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function App() {

  const [numero, setNumero] = useState(0)
  const [botao, setBotao]= useState('VAI')
  const [ultimo,setUltimo]= useState(null)

  function vai(){


  }

  function limpar(){


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
        <Text style={styles.textocorrida}>ultimo tempo 12:12:41 </Text>


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
  }, timer:{
    marginTop:-160, //- se usa para subir
    fontSize:45,
    fontWeight:'bold', //negrito
    color: 'black'
  }, btnArea:{
    flexDirection: 'row', //um ao lado do outro
    marginTop:130,
    height: 40,
  }, 
  btn:{
    flex:1,
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 10
  },btnTexto:{
    fontSize:20,
    fontWeight:"bold",
    color:'#00aeef'
  }, areaUlt:{
    marginTop:40,
    
  }, textocorrida:{
    fontSize:25,
    color:'black',
    fontStyle: 'italic'
  }

  









})








