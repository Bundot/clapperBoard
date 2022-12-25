import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import StarratingComp from './StarratingComp';

export default function NewReleaseCards() {
  return (
    
      
        <View style={styles.containerb}>
        <ImageBackground style={styles.imagetwo}  source={require("../../assets/images/morbiusbg.png")}>
          <View style={styles.containerc}>
          <View style={styles.containerex}>
          <Text style={styles.mrvltxt}> Marvel Studios</Text>
    <Text style={styles.morbiusltxt}> Morbius</Text>
    </View>
   {/** <View  style={styles.containerd}>
      <View style={styles.containerdex}>
        <View style={styles.starscontainer}>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    <Image  source={require("../../assets/images/Vector.png")}/>
    </View>
    <View style={styles.starstxtcontainer}>
    <Text style={styles.userstxt}>From 342 Users</Text>
    </View>
    </View>
    </View> */}
    <StarratingComp/>
    </View> 
    </ImageBackground>
    </View>
    
    
  );
  
}
 
const styles = StyleSheet.create({
  container: {
   
  },

  containerb: {
    flex: 1,
    width: 385,
    height: 60,
    borderRadius:5,
    marginLeft: 14,
    overflow: "hidden",
  },

  imagetwo: {
    width: "100%",
    height:"100%",
  },

  containerc: {
    flex: 1,
    flexDirection: "row", 
  },

  containerex: {
    flex: 1,
    flexDirection: "column-reverse",
  },

  mrvltxt: {
    color: "white",
    fontSize: 15,
  },

  morbiusltxt: {
    color: "white",
    fontSize: 30, 
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
    flex: 0.2,
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
