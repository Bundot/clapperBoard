import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function ContinueWatchingTXT() {
  return (
    
    <View style={styles.containerh}>
      <View>
        <Text>Avengers End Game</Text>
        <Text>Part 4</Text>
        </View>
        <View>
        <Text>The Hobbit</Text>
        <Text>Part 4</Text>
        </View>
    </View>
    
 
 
  );
}
 
const styles = StyleSheet.create({
  container: {
   flexDirection: 'column'
  },

  containere: {
    flex: 0.18,
  // backgroundColor:"green",
    height: 60,
  },

  containerf: {
    flex: 1,
    flexDirection: "row",
   // backgroundColor:"pink",
    flexDirection: "row",
  },

  containerg:{
    borderRadius:10,
    //backgroundColor: "yellow",
    //marginTop: 20,
    marginLeft: 20,
    width: 164,
    height: 104,
    overflow: "hidden",
    borderBottomWidth: 3,
    borderBottomColor: "red"
  },

  containerzz:{
    borderRadius:10,
    //backgroundColor: "yellow",
    //marginTop: 20,
    //marginLeft: 20,
    width: 164,
    height: 104,
    overflow: "hidden",
    borderBottomWidth: 3,
    borderBottomColor: "red"
  },

  bakibttmtxt: {
    color: "#c2c2d6",
    //fontWeight: "bold",
  },

  containerh: {
   backgroundColor: "green",
   flexDirection: "row"
        
  },

  bakitxtcontainer:{
    marginLeft: 30,
  },

  bokunoherocontainer: {
    marginLeft: 110,
  },

  hunterxhuntercontainer:{
    marginLeft: 110
  },

  bakitoptxt: {
    color: "white",
    fontWeight: "bold",
  },

  bakibtnimg:{
    width:"100%",
    height:"100%",
  }



});
