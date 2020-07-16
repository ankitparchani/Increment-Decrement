import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import SingleItem from '../SingleItem/SingleItem';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = 
[{
      quantity: 0,
      data: [],
      isLoading: true,
    }]
  }
    
componentDidMount() {
  fetch('http://35.245.37.244:8080/categories/Grocery/searchList')
    .then((response) => response.json())
    .then((json) => {
      var ListAll = [];
      for ( let i=0 ; i < 2; i++) {
        let singleItem = {name: json[i], quantity:0}
        ListAll.push(singleItem)
      }

      this.setState({ data: ListAll });

    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.setState({ isLoading: false });
    });
}

 callBackParent= (_name, _quantity) => {
this.setState((prevState) => ({
  data: prevState.data.map((obj) =>
    obj.name === _name
      ? Object.assign(obj, {quantity:_quantity})
      : obj,
  ),
}), ()=>{console.log(this.state.data)});
 };
    

render() {
  return (
    <View>
      {this.stateisLoading ? <ActivityIndicator/> : (
        <FlatList
          data={this.state.data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
    <SingleItem dataForName= {item.name} dataForQuantity= {item.quantity} parentCallback= {this.callBackParent} />
            )}
        />
      )}
    </View>
  );
}
};

export default Products;
