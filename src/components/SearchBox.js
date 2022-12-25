//import { StatusBar } from 'expo-status-bar';
//import {ImageBackground, SafeAreaViewBase, StatusBar} from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, Platform, Image, ImageBackground, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchBox() {
  return (
  
    <LinearGradient
    colors={["#19A1BE", "#7D4192"]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.containerb}>
    <View  style={styles.bttn}>
        <ImageBackground style={styles.bttnimag} source={require("../../assets/images/bttnbg.png")}>
          <View style={{backgroundColor: "#494949", width:340, height:53, borderRadius: 23, alignItems: "center", justifyContent: 'center'}}>    
    <TextInput style={styles.txt} placeholder="Search For a Content" placeholderTextColor={"#6C6C6C"}/> 
    </View>
    </ImageBackground>
    </View>
    </LinearGradient>
   
  ); 
}

const styles = StyleSheet.create({

    

    contentSearchtxt: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        },

        containerb:{
            
            //backgroundColor:"green",
            borderRadius:25,
            //borderWidth:0.2,
            //borderLeftColor: "#19A1BE",
            //borderRightColor: "#7D4192",
            //borderTopColor:"#19A1BE",
            //borderBottomColor:"#7D4192",
           // overflow: "hidden",
           width: 342,
           height: 56,
            alignItems: "center",
            justifyContent: "center",
            //borderRadius:50,
            marginTop: 20,
          },
        
          bttn: {
            backgroundColor: "#494949",
            alignItems: "center",
            justifyContent: "center", 
            borderRadius: 30,
            width:340,
            height:53
            
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
        
          
        
          txt: {
           // color: "#6C6C6C",
            fontSize: 20,
            //marginTop:,
            //marginLeft: 80
          }
});