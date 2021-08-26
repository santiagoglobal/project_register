import * as React from 'react';
import * as SQLite from 'expo-sqlite';
//import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  ()=>{},
  error => { console.log(error) }
);

export default class Login extends React.Component {

  render(){

    return( 

      <ScrollView style={styles.container}>    
        <LinearGradient
        // Background Linear Gradient
        colors={['#778DF2','#DDE1FE','white']} //7782F2, '#DDE1FE',
        style={styles.background} />
          <View style={{flex:1, flexDirection:'column'}}>
              <View><Text>{"\n"}</Text></View> 
              <View><Text>{"\n"}</Text></View>
              <View><Text>{"\n"}</Text></View>
              <View><Text>{"\n"}</Text></View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: 'white', textAlignVertical: "center", textAlign: "center", shadowColor: 'royalblue'}}>Ingresa tus datos<Text>{"\n"}</Text></Text>    
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.inputGroup}>
                <Icon style={styles.searchIcon} name="user" size={20} color="#000"/>
                  <TextInput placeholder=" Correo o celular" />
                </View>
                <View style={styles.inputGroup}>
                  <Icon style={styles.searchIcon} name="lock" size={20} color="#000"/>
                  <TextInput placeholder=" Contraseña" autoCompleteType="password" />
                </View>
                <View>
                  <LinearGradient
                    // Button Linear Gradient
                    colors={['#4c669f', '#347BB4', '#192f6a']}
                    style={styles.button}>
                    <Text style={{color: 'white'}}>Iniciar sesión</Text>
                  </LinearGradient>
                {/* <Button title="Registrar" /> */}
              </View>
              <View><Text>{"\n"}</Text></View>
              <View><Text>{"\n"}</Text></View>
              <View><Text>{"\n"}</Text></View>
              <View><Text>{"\n"}</Text></View>
              <View><Text>{"\n"}</Text></View>
              <View><Text>{"\n"}</Text></View>
            </View>
          </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: 'white',
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // height: 400
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cacaca',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 280,
    height: 50,
    alignSelf: 'center',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: 250,
    alignSelf: 'center',
  },
  searchIcon: {
    padding: 10,
  }
});