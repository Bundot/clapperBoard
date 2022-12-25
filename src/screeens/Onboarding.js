import {ImageBackground, StatusBar, TouchableOpacity} from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Platform } from 'react-native';
import CustomButton from '../components/CustomButton';
import GradientButton from '../components/GradientButton';


export default function Onboarding({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image 
        style={styles.image}
        //resizeMode="contain"
        //resizeMethod="scale"
        source={require(".././../assets/images/onboard_image.png")}/>

    <Text style={styles.title}>Onboarding</Text>
    <Text style={styles.subtitle}>Watch Everything You Want For Free</Text>
    
    
    {/*<TouchableOpacity style={styles.containerb}>
    <ImageBackground style={styles.bttnimag} source={require("../../assets/images/bttnbg.png")}>
    <View style={styles.txtview}>
    <Text style={styles.txt}> Enter Now</Text>
    </View>
    </ImageBackground>
    </TouchableOpacity>*/} 

    {/**<CustomButton text="Enter Now"  onPress={() => console.log("blue")}/> */}
    <GradientButton text="Enter Now" onPress={() => navigation.navigate('Dashboard')}/>
  </SafeAreaView>

  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#18181B',
    alignItems: 'center',
    //marginTop:StatusBar.currentHeight,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //justifyContent: 'center',
  },

  containerb:{
    flex: 0.3,
    //backgroundColor:"green",
    borderRadius:17,
    borderWidth:0.2,
    borderLeftColor: "#19A1BE",
    borderRightColor: "#7D4192",
    borderTopColor:"#19A1BE",
    borderBottomColor:"#7D4192",
    overflow: "hidden",
    width: 250,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
    
    //borderRadius:50,
    marginTop: 20,
  },

  txtview: {
    height: 50,
    widt: 240,
    backgroundColor: "#18181B",
  },

  image: {
    marginTop: 50,
    height: "60%",
    width: "100%",
  },

  title: {
    marginTop: 30,
    color: "white",
    fontSize: 30,
    fontWeight: "bolde",
  },

  subtitle: {
    color: "white",
    fontSize: 16,
    //fontWeight: "bolde,"
    marginTop: 10,
    width: 150,
    textAlign: "center",
  },

  btton: {
    width: 250,
    //backgroundColor: "red",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignContent:"center",
    borderRadius:50,
    marginTop: 20,

  },

  bttnimag: {
    width: "100%",
    height: "100%",
  },

  txt: {
    color: "white",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 80
    //marginTop:5,
  }

});
