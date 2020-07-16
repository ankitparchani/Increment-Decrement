import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import Header from './App/Components/Header/Header';
import Products from './App/Components/Products/Products';


class App extends Component {
  constructor(props){
    super(props);
}
    render(){ 
     return (

      <View>
      <Header title />
      <Products />
      </View>

     );
  }
}
  
export default App;

