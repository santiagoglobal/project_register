import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableOpacity, 
  TouchableHighlight,
  Alert
} from 'react-native';

//import Swipeable from '../components/Swipeable';
import { LinearGradient } from 'expo-linear-gradient';
//import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useState } from 'react';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase({name: 'ProjectDB.db'});


function ModalX() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

              <TouchableHighlight
                  style={{ backgroundColor: 'white' }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.viewAlign}><Text style={styles.textStyleX}>X</Text></View>
              </TouchableHighlight>            
            <View>
              <Carousel />
            </View>
          
          </View>
        </View>
      </Modal>
    </View>
  );
}

const NO_WIDTH_SPACE = '​';

const highlight = string =>
  string.split(' ').map((word, i) => (
    <Text key={i}>
      <Text style={styles.highlighted}>{word} </Text>
      {NO_WIDTH_SPACE}
    </Text>
  ));

  function onOpen(){
    modalizeRef.current?.open();
  }

export default class Registro extends React.Component {
  state = {
    visibleModal: null,
    item: null,
  };

  //let [nro_cedula, nombre, apellidos, alias, op_nombre, nacionalidadID, foto_perfil, correo, celular, op_envio, passwd, passwd2, cft, acordado, nro_verificador, verificado, ip, fecha_sistema, eliminado] = useState('');

  state = {nro_cedula: ''}
  state = {nombre: ''}
  state = {apellidos: ''}
  state = {alias: ''}
  state = {correo: ''}
  state = {celular: ''}
  state = {op_envio: ''}
  state = {op_nombre: ''}
  state = {passwd: ''}
  state = {passwd2: ''}
  state = {acordado: ''}
  state = {nacionalidadID: ''}
  state = {verificado: ''}
  state = {ip: ''}
  state = {cft: ''}
  state = {fecha_sistema: ''}
  state = {eliminado: ''}
  state = {foto_perfil: ''}
  state = {nro_verificador: ''}

  insert(nro_cedula, nombre, apellidos, alias, op_nombre, nacionalidadID, foto_perfil, correo, celular, op_envio, passwd, passwd2, cft, acordado, nro_verificador, verificado, ip, fecha_sistema, eliminado){
    var query = "INSERT INTO usuario (nro_cedula, nombre, apellidos, alias, op_nombre, nacionalidadID, foto_perfil, correo, celular, op_envio, passwd, passwd2, cft, acordado, nro_verificador, verificado, ip, fecha_sistema, eliminado) VALUES (null, ?, ?, ?, ?, null, null, null, ?, ?, null, ?, ?, null, null, null, null, null, null, '0')";
    var params = [nro_cedula, nombre, apellidos, alias, op_nombre, nacionalidadID, foto_perfil, correo, celular, op_envio, passwd, passwd2, cft, acordado, nro_verificador, verificado, ip, fecha_sistema, eliminado];
    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) =>
      {
        console.log(results);
        Alert.alert("Felicidades","Usuario guardado"); 
      }, function (tx, err) {
        Alert.alert("Alerta","Usuario no pudo ser guardado"); 
        return;
      });
    });
  }

  handleSave() {
    const {nro_cedula} = this.state;
    const {nombre} = this.state;
    const {apellidos} = this.state;
    const {alias} = this.state;
    const {correo} = this.state;
    const {celular} = this.state;
    const {op_envio} = this.state;
    const {op_nombre} = this.state;
    const {passwd} = this.state;
    const {passwd2} = this.state;
    const {acordado} = this.state;

    const {nacionalidadID} = this.state;
    const {verificado} = this.state;
    const {ip} = this.state;
    const {cft} = this.state;
    const {fecha_sistema} = this.state;
    const {eliminado} = this.state;
    const {foto_perfil} = this.state;
    const {nro_verificador} = this.state;

    if(acordado != "" && passwd2 != "" && passwd != "" && op_nombre != "" && op_envio != "" && celular != "" && correo != "" && apellidos != "" && nro_cedula != "" && nombre != ""){
      this.insert(nro_cedula, nombre, apellidos, alias, op_nombre, nacionalidadID, foto_perfil, correo, celular, op_envio, passwd, passwd2, cft, acordado, nro_verificador, verificado, ip, fecha_sistema, eliminado);
      Alert.alert("Alerta","Guardado"); 
    }else{
      Alert.alert("Alerta","Usuario no pudo ser guardado"); 
    }
  }


  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );


  _renderModalContent = () => (      

    <View style={styles.modalContent} collapsable={false}>
      
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View style={{flex: 0.2}}></View>
        <View style={{flex: 2.6}}><Text></Text><Text style={styles.tituloTerminos}>{highlight(' Política de privacidad ')}</Text></View>
        <View style={{flex: 0.2}}>
          {this._renderButton(<Text style={{color: "grey", textAlign: "left"}}> X</Text>, () => this.setState({ visibleModal: null }))}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {/* <Carousel /> */}
            <TouchableOpacity>
             {/* |<Swipeable /> */} 
            </TouchableOpacity>

      </View>
    </View>

  );

  render(){
    return( 

      <ScrollView style={styles.container}>    
        <LinearGradient
        // Background Linear Gradient
        colors={['#778DF2','#DDE1FE','white']} 
        style={styles.background} />
          <View style={{flex:1, flexDirection:'column'}}>
          <View><Text>{"\n"}</Text></View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.titulo}><Icon style={{fontSize: 20, color:"white", textAlignVertical: "center"}} name="file-text-o" /> Ingresa tus datos<Text>{"\n"}</Text></Text>    
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.inputGroup}>
                <TextInput placeholder="  RUT/DNI" placeholderTextColor="#869AD6" onChangeText={(val) => this.setState({ nro_cedula: val })} value={this.state.nro_cedula} />
              </View>
              <View style={styles.inputGroup}>
                <TextInput placeholder="  Nombre/s" placeholderTextColor="#869AD6" onChangeText={(val) => this.setState({ nombre: val })} value={this.state.nombre} />
              </View>
              <View style={styles.inputGroup}>
                <TextInput placeholder="  Apellido/s" placeholderTextColor="#869AD6" onChangeText={(val) => this.setState({ apellidos: val })} value={this.state.apellidos} />
              </View>
              <View style={styles.inputGroup}>
                <TextInput placeholder="  Alias (opcional)" placeholderTextColor="#869AD6" onChangeText={(val) => this.setState({ alias: val })} value={this.state.alias} />
              </View>
              <View style={{marginBottom: 15}}></View>
              <View style={styles.inputGroup}>
                <Icon style={styles.searchIcon} name="envelope-o" size={19} color="#5292de"/>
                <TextInput placeholder="Correo" autoCompleteType="email" placeholderTextColor="#869AD6" onChangeText={(val) => this.setState({ correo: val })} value={this.state.correo} />
              </View>
              <View style={styles.inputGroup}>
                <Icon style={styles.searchIcon} name="mobile" size={25} color="#5296e2"/>
                <TextInput placeholder="  Celular" placeholderTextColor="#869AD6" onChangeText={(val) => this.setState({ celular: val })} value={this.state.celular} />
              </View>
              <View style={{height: 17, alignSelf:'center'}}></View>
              <View style={styles.inputGroupDark}>
                <Icon style={styles.searchIcon} name="lock" size={22} color="#5296e2"/>
                <TextInput placeholder="  Contraseña" autoCompleteType="password" textContentType="password" placeholderTextColor="#8FA1D8"  onChangeText={(val) => this.setState({ passwd: val })} value={this.state.passwd} secureTextEntry />

              </View>
              <View style={styles.inputGroupDark}>
                <Icon style={styles.searchIcon} name="lock" size={22} color="#5296e2"/>
                <TextInput placeholder="  Repita contraseña" autoCompleteType="password" textContentType="password" placeholderTextColor="#8FA1D8" onChangeText={(val) => this.setState({ passwd2: val })} value={this.state.passwd2} secureTextEntry />

              </View>

              <View>
                  <LinearGradient
                    // Button Linear Gradient
                    colors={['#4c669f', '#347BB4', '#192f6a']}
                    style={styles.button}>
                    <Text style={{color: 'white'}} onPress={() => {this.handleSave();}}>Regístrarme</Text>
                  </LinearGradient>
              </View>
              <View style={{width: 280, height: 20, alignSelf:'center'}}>
              </View>
            </View>
          </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  titulo:{
      color: 'white', 
      textAlignVertical: "center", 
      textAlign: "center", 
      textShadowColor: 'royalblue', 
      textShadowOffset: {
        width: -1, 
        height: 1}, 
      fontSize: 20,
      fontWeight: 'bold',
      textShadowRadius: 5
    },
    tituloTerminos:{
      color: 'white', 
      textAlignVertical: "center", 
      textAlign: "center", 
      textShadowColor: '#D7AB00', 
      textShadowOffset: {
        width: 1, 
        height: 1}, 
      fontSize: 21,
      fontWeight: 'bold',
      textShadowRadius: 2
    },
    destacado: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
  highlighted: {
    backgroundColor: '#FDC900',
  },
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: 'white',
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
    borderRadius: 5,
    width: 280,
    height: 50,
    alignSelf: 'center',
  },
  inputGroupDark: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
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
  checkboxContainer: {
    flex: 1,
    flexDirection:'row',
    marginBottom: 15,
    width: 280,
    height: 52,
    alignSelf: "center",
  },
  viewPager: {
    flex: 1,
    width: "100%",
		height:"100%",
  },
  checkbox: {
    alignSelf: "center",
  },
  checkLabel: {
    alignSelf: "center",
    margin: 5,
    flex: 1,
    marginBottom: 15,
    marginBottom: 20,
    width: 280,
    height: 50,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#68CCF9',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#347BB4',
  },
  searchIcon: {
    padding: 13,
  },
  modalContent: {
    position: 'absolute',
    bottom: 'auto',
    right: 0,
    left: 0,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: "center",
    alignContent: "center",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
    elevation: 0,
  },
  textStyle: {
    color:'#2c9dd1', 
    fontWeight:"bold", 
    textDecorationLine: 'underline'
  },
  viewAlign: {
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  },
  textStyleX: {
    color:'#E3E3E3',
    marginBottom: 15
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }
});