import React from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchComponent';
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
       myText: 'Click Button'
    }
  //   this.state2 = {
  //     myText: 'Click Button'
  //  }
 }


  getUserLocationHandler = () =>
  {
    <Text id="display">I am here</Text>
     navigator.geolocation.getCurrentPosition(position =>
      {
        this.setState({myText: "Latitude:"+position.coords.latitude+" Longitude:"+position.coords.longitude})
       // this.setState2({myText: "Longitude:"+position.coords.longitude})
      },err=>console.log(err));
  }
  render() {
    return (
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
       <FetchLocation onGetLocation={this.getUserLocationHandler}/>
    <Text id="display">  {this.state.myText}</Text>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('App',()=>App);