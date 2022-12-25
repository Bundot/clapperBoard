import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';

export default function RecommendCard() {
  return (
    <View style={styles.containerj}>
    <View style={styles.containerk}>
      <View style={styles.containerl}>
        <ImageBackground style={styles.bakibtnimg} source={require("../../assets/images/secretwars1.png")}>
        </ImageBackground>
      </View>
      <View style={styles.containerl}>
        <ImageBackground style={styles.bakibtnimg} source={require("../../assets/images/secretwars2.png")}>
        </ImageBackground>
      </View>
      <View style={styles.containerl}>
        <ImageBackground style={styles.bakibtnimg} source={require("../../assets/images/secretwars3.png")}>
        </ImageBackground>
      </View>
       </View>
       <View style={styles.containerh}>
      <View style={styles.bakitxtcontainer}>
        <Text style={styles.bakitoptxt}>Secret Wars</Text>
        <Text style={styles.bakibttmtxt}>2022</Text>
      </View>
      <View style={styles.secretwarstwocontainer}>
        <Text style={styles.bakitoptxt}>Secret Wars</Text>
        <Text style={styles.bakibttmtxt}>2022</Text>
      </View>
      <View style={styles.secretwarsthreecontainer}>
        <Text style={styles.bakitoptxt}>Secret Wars</Text>
        <Text style={styles.bakibttmtxt}>2022</Text>
      </View>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  containerj: {
    flex: 0.25,
    marginTop: 20,
  },

  containerk:{
    flex: 1,
    flexDirection: "row",
  },

  containerl:{
    borderRadius:10,
    marginTop: 20,
    marginLeft: 20,
    width: 124,
    height: 124,
    overflow: "hidden",
  },

  containerh: {
    flex:0.3,
    flexDirection: "row"
  },

  bakitxtcontainer:{
    marginLeft: 30,
  },

  bakitoptxt: {
    color: "white",
    fontWeight: "bold",
  },

  
  bakibttmtxt: {
    color: "#c2c2d6",
  },

  bakibtnimg:{
    width:"100%",
    height:"100%",
  },

  secretwarstwocontainer:{
    marginLeft: 90,
  },

  secretwarsthreecontainer:{
    marginLeft: 90,
  },

});
