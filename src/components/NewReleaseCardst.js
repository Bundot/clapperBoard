import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating } from 'react-native-ratings';
import StarratingComp from './StarratingComp';
import MorbiusDetails from '../screeens/movieDetails/MorbiusDetails';

export default function NewReleaseCardst({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <ImageBackground 
        style={styles.imgbg}
        resizeMode='cover'
        blurRadius={1}
        source={require("../../assets/images/avengers.jpg")}>
            <View style={styles.containern}>
              <View style={styles.textsection}>
                <Text style={styles.title}>Avengers</Text>
                <Text style={styles.subtitle}>Marvel Studios</Text>
              </View>
              {/** <View style= {styles.ratingsection}>
              <Rating imageSize={25} tintColor="rgba(24,24,27,0.5)" />
              <Text style={styles.rttxt}>From 342 Users</Text>
              </View>*/}
              <View style={styles.ratingsection}>
              <StarratingComp/>
              </View>
            </View>
        </ImageBackground>
    </View>
    </TouchableOpacity>
  );
  
}
 
const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
    
  },

  imgbg:{
    height: "100%",
    width: "100%",
    justifyContent: 'flex-end',
  },

  containern:{
    height: 70,
    backgroundColor: "rgba(24,24,27,0.5)" ,// final value of rgba affects color opacity
    //backgroundColor: "#292929",
    //opacity: 0.5,
    //justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 16
  },

  textsection:{
    //backgroundColor: "red",
    width: 50,
    //height: 50,
    alignSelf: "flex-end",
    flexGrow: 1,
   // paddingHorizontal: 16,
  },

  ratingsection: {
    //backgroundColor: "indigo",
    alignSelf: "flex-end"
    //width: 50,
    //height: 50,
    //flexGrow: 1
  },
  title:{
    color: "white",
    fontSize: 24,
    fontWeight: "700"
  },

  subtitle:{
    color: "white",
    fontSize: 12,
    fontWeight: "400"
  },
  rttxt:{
    fontSize: 15,
    fontWeight: "400",
    color: "#848484"
  }

});
