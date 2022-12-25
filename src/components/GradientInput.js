import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {ImageBackground, StatusBar, TextInput, TouchableOpacity} from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Platform } from 'react-native';


export default function GradientInput({text}) {

    //creating a useState variable

    const[searchValue, setSearchValue] = useState(null);
  return (
    <View style={styles.container}>
        <LinearGradient colors={["#19A1BE", "#7D4192"]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.gradientContainer}>
        <View style={styles.contentContainer}>
        <TextInput onChange={(text) => setSearchValue(text)} keyboardType='numeric' placeholder='Search For a Content' placeholderTextColor= "white" style={{height: "100%", fontSize: 16, color: "white", backgroundColor: "#494949" }}/>
        </View>       
        </LinearGradient>
    </View>
    
  );
  
}
 
const styles = StyleSheet.create({
  container: {
  
  },

  

  gradientContainer: {
    height: 58,
    borderRadius: 25,
    padding: 2,
  },

  contentContainer: {
    height: "100%",
    borderRadius:  23,
    padding: 5,
    paddingLeft: 20,
    justifyContent:'center',
    backgroundColor: "#494949",

  }

  

});
