import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

export default function ContinueWatchingCardss({image, text, subtext}) {
  return (
    
    <View style={styles.container}>
        <Image resizeMode='cover' style={styles.image} source={image}/>
        <View style={{backgroundColor: "red", width: 100, height:1, marginLeft: 5}}></View>
        <View style={styles.containertwo}>
        <Text style={{color: "white",fontWeight: "bold",}}>{text}</Text>
        <Text style={{ color: "#c2c2d6"}}>{subtext}</Text>
        </View>
    </View>
    
    
  );
  
}
 
const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginTop: 20,
    //backgroundColor: "red", 
    width: 180
  },

  containertwo:{
    //alignItems: 'center'
  },

  image: {
    width: "100%", 
    height:110, 
    borderRadius: 5,
    borderBottomWidth: 10,
    borderBottomColor: "red",
  }
});
