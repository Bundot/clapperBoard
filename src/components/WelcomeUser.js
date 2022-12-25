import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import HamburgerPreview from './HamburgerPreview';
import MenuIcon from './MenuIcon';
import ProfileImage from './ProfileImage';

export default function WelcomeUser({text, source}) {
  return (
    <View style={styles.container}>
      <ProfileImage/>
    {/**  <View style={styles.profilepic}>
<Image style={styles.image} source={require("../../assets/images/img.png")}/>
</View> */}
    <View>
        <Text style= {styles.wbtxt}>Welcome Back</Text>
        <Text style= {styles.wnme}>{text}</Text>       
        </View>
        <MenuIcon/>
        </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: "row",
  },

  profilepic: {
    marginTop:40,
    width: 60,
    height: 60,
    borderRadius: 30,
    //borderWidth: 2,
    backgroundColor: "green",
    overflow: "hidden"
  },

  image: {
    width: 60,
    height: 59,
    //marginBottom: 15,
    //marginRight: 20,
  },

  wbtxt: {
    marginTop: 40,
    marginLeft:10,
    color:"white",
    fontSize: 20,
  },

  wnme: {
    marginTop: 10,
    marginLeft: 10,
    color:"white",
    fontSize: 30,
  },

  imgstyle:{
    width: 30,
    height: 2,
   // marginLeft: 15
    
  },

  imgstyles:{
    marginTop: 5,
    width: 30,
    height: 2,
    
  },

  imgstyless:{
    marginTop: 5,
    width: 30,
    height: 2,
    
  }
});
