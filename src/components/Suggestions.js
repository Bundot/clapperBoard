import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function Suggestions() {
  return (
    
    <View style={styles.container}>
    <View style={styles.containere}>
    <View style={styles.containerf}> 
    <View style={{ height: 140}}>
    <View style={styles.containerzz}>    
   <ImageBackground resizeMode='cover' style={styles.bakibtnimg} source={require("../../assets/images/babydriver.jpg")}>
  </ImageBackground>
  </View>
  <Text style={styles.bakitoptxt}>Baby Driver</Text>
  <Text style={styles.bakibttmtxt}>2022</Text>
  </View>
  <View style={{ height: 140}}>
  <View style={styles.containerg}>
  <ImageBackground resizeMode='cover' style={styles.bakibtnimg} source={require("../../assets/images/blackpanther.jpg")}>
  </ImageBackground>
  </View>
  <View style={{marginLeft: 20}}>
  <Text style={styles.bakitoptxt}>Black Panther</Text>
  <Text style={styles.bakibttmtxt}>2022</Text>
  </View>
  </View> 
  <View style={{ height: 140}}>
  <View style={styles.containergk}>
  <ImageBackground resizeMode='cover' style={styles.bakibtnimg} source={require("../../assets/images/dora.jpg")}>
      </ImageBackground>
  </View> 
  <View style={{marginLeft: 20}}>
  <Text style={styles.bakitoptxt}>Dora</Text>
  <Text style={styles.bakibttmtxt}>2022</Text>
  </View>
  </View>
    </View>
    </View>
    </View>
 
  );
}
 
const styles = StyleSheet.create({
  container: {
    marginTop: 20, 
    //backgroundColor: "green",
    height: 155
  },

  containere: {
    //flex: 0.18,
  // backgroundColor:"green",
    // height: 60,
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
    width: 124,
    height: 124,
    overflow: "hidden",
    //borderBottomWidth: 3,
    //borderBottomColor: "red",
    //flexGrow: 1,
  },

  containergk:{
    borderRadius:10,
    //backgroundColor: "yellow",
    //marginTop: 20,
    marginLeft: 20,
    width: 124,
    height: 124,
    overflow: "hidden",
    //borderBottomWidth: 3,
    //rderBottomColor: "red"
  },

  containerzz:{
    borderRadius:10,
    //backgroundColor: "blue",
    //marginTop: 20,
    //marginLeft: 20,
    width: 124,
    height: 124,
    overflow: "hidden",
   // borderBottomWidth: 3,
    //borderBottomColor: "red"
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
    alignItems: 'center',
    fontWeight: "bold",
  },



});
