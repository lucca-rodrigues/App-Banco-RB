import React, { Component } from 'react';
import { View, Image, TextInput, Picker, StyleSheet } from 'react-native';

import Logo from './assets/logo.png';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      initial: 0,
      gender: [
        {key:1, Sexo: "Masculino" },
        {key:2, Sexo: "Feminino" }
      ]
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
    width: 200,
    height: 200
  },
  input:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DEE2E6',
    padding: 15,
    width: 300,
    fontSize: 20,
    marginBottom: 10
  }
});
export default App;