//import { StatusBar } from 'expo-status-bar';
//import {ImageBackground, SafeAreaViewBase, StatusBar} from 'react-native';
import { SafeAreaView, StyleSheet, Text, View, Platform, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import ContinueWatchingCard from '../components/ContinueWatchingCards';
import HamburgerPreview from '../components/HamburgerPreview';
import NewReleaseCards from '../components/NewReleaseCards';
import NewReleaseCard from '../components/NewReleaseCards';
import RecommendCard from '../components/RecommendCard';
import WelcomeUser from '../components/WelcomeUser';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <WelcomeUser text={"Isaac"}/>
      
        <Text style={styles.newreleasetxt}>New Release</Text>
        <NewReleaseCards/>
    <Text style={styles.newreleasetxt}>Continue Watching.</Text>
    <ContinueWatchingCard />
    <View style={styles.containeri}>
      <View style={styles.foryoutxtcontainer}>
        <Text style={styles.foryoutxt}><Text style={styles.fullstoptxt}>. </Text>For You</Text>
      </View>
      <View style={styles.firstpopulartxtcontainer}>
        <Text style={styles.populartxt}>Popular</Text>
      </View>
      <View style={styles.secondpopulartxtcontainer}>
        <Text style={styles.populartxt}>Popular</Text>
      </View>
      <View style={styles.firstpopulartxtcontainer}>
        <Text style={styles.populartxt}>Popular</Text>
      </View>
    </View>
    <RecommendCard/>    
    </SafeAreaView>  
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:  'blue',
    backgroundColor: "#292929" ,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20
  },
  fullstoptxt:{
    fontWeight:"bold",
    fontSize: 50,
    color: "white"
  },
  containeri: {
    flex:0.05,
    marginTop:20,
   // backgroundColor: "black",
    flexDirection: "row"
  },
  foryoutxtcontainer:{
    marginTop: -14,
    marginLeft: 30
  },
  firstpopulartxtcontainer:{
    marginTop: 16,
    marginLeft: 50,
  },
  secondpopulartxtcontainer:{
    marginTop: 16,
    marginLeft: 50,
  },
  newreleasetxt: {
    color: "white",
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10, 
  },
  foryoutxt: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20
  },
  populartxt:{
    color: "#c2c2d6",
    
  },
  ncontainer:{
    flexDirection: "row",
  }
});