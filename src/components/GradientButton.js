import { LinearGradient } from 'expo-linear-gradient';
import {ImageBackground, StatusBar, TouchableOpacity} from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Platform } from 'react-native';


export default function GradientButton({text, onPress}) {
  return (
   
    <LinearGradient
    colors={["#19A1BE", "#7D4192"]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.containerb}>
    <TouchableOpacity style={styles.bttn} onPress={onPress}>
        <ImageBackground style={styles.bttnimag} source={require("../../assets/images/bttnbg.png")}>
    <Text style={styles.txt}>{text}</Text> 
    </ImageBackground>
    </TouchableOpacity>
    </LinearGradient>
    
    
  );
  
}
 
const styles = StyleSheet.create({
  container: {
   
  },

  containerb:{
    //flex: 0.3,
    //backgroundColor:"green",
    borderRadius:30,
    //borderWidth:0.2,
    //borderLeftColor: "#19A1BE",
    //borderRightColor: "#7D4192",
    //borderTopColor:"#19A1BE",
    //borderBottomColor:"#7D4192",
   // overflow: "hidden",
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    //borderRadius:50,
    marginTop: 20,
  },

  bttn: {
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center", 
    borderRadius: 30,
    width:246,
    height:45
    
  },

  bttnimag: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 200,
  },

  txtview: {
    height: 50,
    widt: 240,
    justifyContent: "center",
    //backgroundColor: "#18181B",
  },

  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198
},

  txt: {
    color: "white",
    fontSize: 20,
    //marginTop:,
    //marginLeft: 80
  }

});
