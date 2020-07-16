import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
// import Commonstylesheet from './App/Components/Commonstylesheet/Commonstylesheet';


class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: this.props.dataForName,
      quantity: this.props.dataForQuantity
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
}

increment=()=>{
this.setState ({quantity: this.state.quantity+1},
() => {this.props.parentCallback(this.state.name,this.state.quantity);}
)};

decrement=()=>{
  this.setState ({quantity: this.state.quantity-1},
  () => {this.props.parentCallback(this.state.name,this.state.quantity);}
)};


  
  callBackParent(name, quantity){
  this.props.parentCallBack(name,quantity)
  }



  render() {
    return (
      <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
    <Text>{this.state.name}  {this.state.quantity}</Text>
    <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
    <Button onPress= {this.increment} title= '+'/>
    <Button onPress= {this.decrement} title= '-'/>
    </View>
      </View>
    );
}
};




export default SingleItem;