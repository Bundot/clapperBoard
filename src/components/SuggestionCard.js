import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

export default function SuggestionCard({image, text, subtext}) {
  return (
    
    <View style={styles.container}>
        <Image resizeMode='cover' style={styles.image} source={image}/>
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
    width: 130
  },

  containertwo:{
    alignItems: 'center'
  },

  image: {
    width: "100%", 
    height:130, 
    borderRadius: 15
  }
});
