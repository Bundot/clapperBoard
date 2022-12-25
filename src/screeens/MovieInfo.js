import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import StarratingComp from '../components/StarratingComp';
import CastDetails from '../components/CastDetails';
import CastDetailsFlatList from '../testing/CastDetailsFlatList';

export default function MoviesInfo({image, title, year, studio, summary, starusers}) {
  return (

    <ScrollView>
<View style={styles.container}>
    <ImageBackground blurRadius={0.6} style={{width: 494, height: 442, justifyContent: 'flex-end', marginLeft: -40}} source={image}>
      <View  style={styles.containerb}></View>
    </ImageBackground>
    <View style={{flexDirection: "row", width: "100%",  paddingHorizontal: 10}}>
      <View style={{ flexGrow: 1}}>
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontWeight: "bold", fontSize: 32,color: "white"}}>{title}</Text>
      <Text style={{marginLeft:3, alignSelf:'flex-end', marginBottom: 5, color: "white"}}>{year}</Text>
      </View>
      <Text style={{color: "white"}}>{studio}</Text>
    </View>
    <View>
      <Text></Text>
    </View>
    <View>
      <StarratingComp starusers={starusers}/>
    </View>
    </View>
    <View  style={{width: "100%", paddingHorizontal: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, color: "white"}} numberOfLines={5}  ellipsizeMode={'tail'} >{summary} </Text>
    </View>
    <View style={{ height: 268}}>
     <CastDetailsFlatList/>
    </View>
    </View>
</ScrollView>
  );
  
}
 
const styles = StyleSheet.create({
  container: {
  backgroundColor: "#292929",
  //height: 100
  },

  containerb: {
    backgroundColor: "#1A1A1D",
    height: 100,
    opacity: 0.3,
    
  },



  

});
