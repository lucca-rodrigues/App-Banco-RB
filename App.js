import React, { Component } from 'react';
import { View, Image, TextInput, Picker, Button, Switch, Text, StyleSheet } from 'react-native';

import Logo from './assets/logo.png';
import Slider from '@react-native-community/slider';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      initial: 0,
      gender: [
        {key:1, Sexo: "Masculino" },
        {key:2, Sexo: "Feminino" }
      ],
      StatusEstudante: false,
      valor: 0
    }
  }
  render(){

    let genderItem = this.state.gender.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.Sexo} />
    })

    return(
      <View style={styles.container}>
        <View>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View>
          <TextInput style={styles.input}
            placeholder="Nome"
          />
          <TextInput style={styles.input}
            placeholder="Idade"
          />
          <Picker 
            selectedValue={this.state.initial}
            onValueChange={( itemValue, itemIndex) => this.setState({gender : itemValue})}
          >
            {genderItem}
          </Picker>
 
				<Text>Você tem {this.state.valor.toFixed(0)} Kg</Text>
          <Switch 
            value={this.state.StatusEstudante}
            onValueChange={ (valorSwitch) => this.setState({StatusEstudante: valorSwitch})}
          />
          	<Text style={styles.texto}>
					    {(this.state.StatusEstudante) ? "Sou Estudante" : "Não Sou Estudante"}
				    </Text>
            
            <View style={styles.entrar}>
              <Button  title="Entrar" onPress={ () => this.entrar('Lucas')} />
            </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  logo: {
    width: 130,
    height: 130
  },
  input:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DEE2E6',
    padding: 15,
    width: 300,
    fontSize: 20,
    marginBottom: 10
  },
  entrar: {
    marginTop: 50
  }
});
export default App;