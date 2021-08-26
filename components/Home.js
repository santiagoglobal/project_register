import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'; //, TouchableOpacity

import { LinearGradient } from 'expo-linear-gradient';

export default class Home extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render(){
  return(
    <View style={{flex:1, flexDirection:'column'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>

        <View style={{flex: 1, backgroundColor:'black'}}>
        <Text>{"\n"}</Text>
        {/*95 x 140 pixeles lo ideal */}
        </View>
        <View style={{flex: 2, backgroundColor: 'black', alignContent: 'center'}}>
          <Text>{"\n"}</Text>


            <Text>{"\n"}</Text>
            
        </View>
        <View style={{flex: 1, backgroundColor: 'black'}}>
        <Text>{"\n"}</Text>
        </View>
        
      </View>
      <View style={{flex: 3, flexDirection:'row', backgroundColor: 'black'}}>
          <View style={{flex: 0.5, backgroundColor: 'black'}}>
          </View>
          <View style={{flex: 3}}>
            <View style={{flex: 2, flexDirection: 'column'}}>
              <View>
                <Text>{"\n"}</Text>
               <Text style={{color: 'white'}}>!Bienvenido! Pulsa registro para registrarte, y si no, inicia sesión</Text>
               <Text>{"\n"}</Text>
              </View>
              <View style={{flex: 2.6, flexDirection: 'row', alignContent: 'center'}}>
                  <View style={{flex:0.2}}></View>
                  <View style={{flex:1}}>
 
                    <LinearGradient
                      colors={['red', '#c21500', '#860e00']}
                      onPress={() => this.props.navigation.navigate( 'Registro' )}
                      style={styles.button}>
                        <TouchableOpacity
                          onPress={
                            () => this.props.navigation.navigate( 'Registro' )
                          }
                        >
                      <Text style={{fontSize: 15, color:'#f6c70c', alignSelf: 'center'}}>REGÍSTRATE</Text>
                    </TouchableOpacity>
                    </LinearGradient>
                  </View>
                  <View style={{flex:0.2}}></View>
                  <View style={{flex:1}}>
                    {/*  */}
                    <LinearGradient
                      colors={['red', '#c21500', '#860e00']}
                      onPress={
                        () => this.props.navigation.navigate( 'Login' )
                      }
                      style={styles.button}>
                        <TouchableOpacity
                          onPress={
                              () => this.props.navigation.navigate( 'Login' )
                          }
                        >
                          <Text style={{fontSize: 15, color:'#f6c70c', alignSelf: 'center'}}>INGRESA</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                  </View>
                  <View style={{flex:0.2}}></View>
              </View>
            </View>
          </View>
          <View style={{flex: 0.5}}>

          </View>
      </View>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 4,
    width: 122,
    alignSelf: 'center',
  },
});