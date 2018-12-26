import React from 'react';
import {Button} from 'react-native';
const fetchlocation = props => {
   return   <Button title="Location"  onPress={props.onGetLocation} />
};
export default fetchlocation;