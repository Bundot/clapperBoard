import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function HamburgerPreview() {
  return (

  <SafeAreaView style={styles.container}>
    <View>
        <Image style= {styles.imgstyle} source={require("../../assets/images/Line1.png")}/>
        <Image style= {styles.imgstyles} source={require("../../assets/images/Line2.png")}/>
        <Image style= {styles.imgstyless} source={require("../../assets/images/Line1.png")}/>
        </View>   
      </SafeAreaView>
     
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20
  },

  imgstyle:{
    width: 30,
    height: 2,
   // marginLeft: 15
    
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
