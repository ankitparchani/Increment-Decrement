import React, {Component} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
  

class Header extends Component {
constructor(Props){
  super(Props);
}
  render () {
  return (

    <View style={{height: 60,
      padding: 15,
      backgroundColor: 'darkslateblue', marginTop: 30}}>
      <Text style={{color: '#fff',
      fontSize: 23,
    textAlign: 'center'}}>Shopping Trolley</Text>     
    </View>
     );
  }

}  
export default Header;

