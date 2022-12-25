import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function ContinueWatchingCard() {
  return (
    
    <View style={{flex: 1}}>
    <View style={styles.containere}>
    <View style={styles.containerf}> 
    <View style={{ height: 140}}>
    <View style={styles.containerzz}>    
   <ImageBackground resizeMode='cover' style={styles.bakibtnimg} source={require("../../assets/images/avengers.jpg")}>
  </ImageBackground>
  </View>
  <Text style={styles.bakitoptxt}>Avengers End Game</Text>
  <Text style={styles.bakibttmtxt}>Part 4</Text>
  </View>
  <View style={{ height: 140}}>
  <View style={styles.containerg}>
  <ImageBackground resizeMode='cover' style={styles.bakibtnimg} source={require("../../assets/images/hobbit.jpg")}>
  </ImageBackground>
  </View>
  <View style={{marginLeft: 20}}>
  <Text style={styles.bakitoptxt}>The Hobbit</Text>
  <Text style={styles.bakibttmtxt}>Part 4</Text>
  </View>
  </View> 
  <View style={{ height: 140}}>
  <View style={styles.containergk}>
  <ImageBackground resizeMode='cover' style={styles.bakibtnimg} source={require("../../assets/images/inception.jpg")}>
      </ImageBackground>
  </View> 
  <View style={{marginLeft: 20}}>
  <Text style={styles.bakitoptxt}>Inception</Text>
  <Text style={styles.bakibttmtxt}>Part 4</Text>
  </View>
  </View>
    </View>
    </View>
    </View>
 
  );
}
 
const styles = StyleSheet.create({
  container: {
   
  },

  containere: {
    //flex: 0.18,
  // backgroundColor:"green",
    height: 60,
  },

  containerf: {
   // flex: 1,
    height:140,
    flexDirection: "row",
   // backgroundColor:"pink",
    flexDirection: "row",
  },

  containerg:{
    borderRadius:10,
   // backgroundColor: "green",
    //marginTop: 20,
    marginLeft: 20,
    width: 164,
    height: 104,
    overflow: "hidden",
    borderBottomWidth: 3,
    borderBottomColor: "red",
    //flexGrow: 1,
  },

  containergk:{
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
   // backgroundColor: "blue",
    //marginTop: 20,
    //marginLeft: 20,
    width: 164,
    height: 104,
    overflow: "hidden",
    borderBottomWidth: 3,
    borderBottomColor: "red"
  },
 
  bakibtnimg:{
    width:"100%",
    height:"100%",
  },

  bakibttmtxt: {
    color: "#c2c2d6",
    //fontWeight: "bold",
  },
  bakitoptxt: {
    color: "white",
    fontWeight: "bold",
  },



});
