import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function CastDetails({image, text, subtext}) {
  return (
    <View style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 10}}>
      <View style={{flexDirection: "row-reverse"}}>
    <View style={{width: 160, height: 50, backgroundColor: "#5E5E5E", marginTop: 5, marginLeft: -30, borderRadius:20}}>
      <View style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: "white"}}>{text}</Text>
      <Text style={{color: "white"}}>{subtext}</Text></View>
      </View>
    <LinearGradient
    colors={["#19A1BE", "#7D4192"]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.gradientContainer}>
        <View style={styles.imageContainer}>
        <Image resizeMode='cover' style={styles.image} source={image}/>
        </View>
    </LinearGradient>
    </View>
    </View>
  );
  
}
 
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gradientContainer:{
    // marginLeft: 20,
     //marginTop:40,
     height: 60,
     width: 60,
     borderRadius: 60,
     alignItems: "center",
     justifyContent: "center"
 
   },
 
   imageContainer:{
     height: 55,
     width: 55,
     borderRadius: 55,
     overflow: "hidden",
     backgroundColor: "white"
   },
 
   image: {
     width: "100%",
     height: "100%",
     //marginBottom: 15,
     //marginRight: 20,
   },
});
