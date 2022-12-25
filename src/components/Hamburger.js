import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function Hamburger() {
  return (
    <View >
        <Image style= {styles.imgstyle} source={require("../../assets/images/Line1.png")}/>
        <Image style= {styles.imgstyles} source={require("../../assets/images/Line2.png")}/>
        <Image style= {styles.imgstyless} source={require("../../assets/images/Line1.png")}/>
        </View>    
  );
}
 
const styles = StyleSheet.create({
  container: {
  },

  imgstyle:{
    width: 30,
    height: 2,  
  },

  imgstyles:{
    marginTop: 5,
    width: 30,
    height: 2,   
  },

  imgstyless:{
    marginTop: 5,
    width: 30,
    height: 2,    
  }
});
