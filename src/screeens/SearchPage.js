//import { StatusBar } from 'expo-status-bar';
//import {ImageBackground, SafeAreaViewBase, StatusBar} from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, Platform, Image, ImageBackground, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import GradientInput from '../components/GradientInput';
import SearchBox from '../components/SearchBox';
import SuggestionFlatList from '../testing/SuggestionFlatList';


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      	<ScrollView>
      <View style={{paddingHorizontal: 10, marginTop:20, marginLeft: 10}}>
      <Text style={styles.searchtxt}>Search For A Content</Text>
        <SearchBox/>
        <Text style={styles.categoriestxt}>Categories</Text>
        </View>
        
        <View style={styles.containera}>
            <View style={styles.spidermancon}>
           <Image resizeMode='contain' style={{ height: 170, width: 190, marginLeft: 20}} source={require("../../assets/images/Spidermanbg.png")}/>
           <View style={{flexDirection:'row', marginTop: -180}}>
          <Image style={{height:200}} source={require("../../assets/images/Spiderman.png")}/>
          <View style={{alignItems: "center", marginTop: 25}}>
          <Text style={{fontWeight: '900', color: "white", fontSize: 18}}>Movies</Text>
          <Text style={{ color: "white", fontSize: 12}}>532 Titles</Text>
          </View>
          </View>
            </View>
            <View style={styles.spidermancon}>
           <Image resizeMode='contain' style={{ height: 170, width: 180, marginLeft: 10}} source={require("../../assets/images/anime1.png")}/>
           <View style={{flexDirection:'row-reverse', marginTop: -180}}>
          <Image style={{height:200}} source={require("../../assets/images/anime1bg.png")}/>
          <View style={{alignItems: "center", marginTop: 25}}>
          <Text style={{fontWeight: '900', color: "white", fontSize: 18}}>Animes</Text>
          <Text style={{ color: "white", fontSize: 12}}>532 Titles</Text>
          </View>
          </View>
            </View>
        </View>
        
        <Text style={{color: "white", fontSize: 20, marginLeft: 20, marginTop:20}}>Most Watched</Text>

        <SuggestionFlatList/> 
        <SuggestionFlatList/>
        <SuggestionFlatList/>
        </ScrollView>
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:  'blue',
    backgroundColor: "#292929" ,
   // backgroundColor: "white" ,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //paddingHorizontal: 20
  },

  searchtxt: {
    marginTop: 30,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: 'bold'
  },

  containera: {
    
    flexDirection: "row",
    //backgroundColor: "green"
  },

  containerb:{
    flexDirection: "row"
  },

  spidermancon: {
    flex: 1,
   // backgroundColor: "red",
  },

  spidermanbg:{
    width: "100%",
    height: "100%",
  },

  animecon:{
    flex: 1,
    backgroundColor: "blue",
  },

  categoriestxt: {
    marginTop: 32,
    color: "white",
    fontSize: 30
  }

});