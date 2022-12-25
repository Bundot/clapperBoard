import { LinearGradient } from 'expo-linear-gradient';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileImage({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <LinearGradient
    colors={["#19A1BE", "#7D4192"]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.gradientContainer}>
        <View style={styles.imageContainer}>
        <Image resizeMode='cover' style={styles.image} source={require("../../assets/images/img.png")}/>
        </View>
    </LinearGradient>
    </TouchableOpacity>
  );
  
}
 
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#18181B',
  },

  gradientContainer:{
    marginLeft: 20,
    marginTop:40,
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
