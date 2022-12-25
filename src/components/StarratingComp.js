import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function StarratingComp({starusers}) {
  return (
    
    
        
    <View  style={styles.containerd}>
      <View style={styles.containerdex}>
        <View style={styles.starscontainer}>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    </View>
    <View>
    <Text style={styles.userstxt}>From {starusers} Users</Text>
    </View>
    </View>
    </View>
    
  );
  
}
 
const styles = StyleSheet.create({
  container: {
   
  },

  

  containerd: {
    flex:1 ,
    flexDirection: "column-reverse",
  },

  containerdex: {
    justifyContent: "flex-end",
    flex: 0.5,
  },

  starscontainer: {
    flexDirection: "row-reverse"
  },

  starstxtcontainer :{
    flex: 0.2,
    flexDirection: "row-reverse"
  },

  userstxtcontainer: {
    color: "white",
    marginTop: 165,
    marginRight: 10
  },

  userstxt: {
    color: "white", 
  },

});
