import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SuggestionCard from '../components/SuggestionCard';

const actions= [{
    image: require("../../assets/images/babydriver.jpg"),
    text: "Baby Driver",
    subtext: "2022",
},
{
    image: require("../../assets/images/blackpanther.jpg"),
    text: "Black Panther",
    subtext: "2022",
},
{
    image: require("../../assets/images/dora.jpg"),
    text: "Dora",
    subtext: "2022",
},
{
  image: require("../../assets/images/grimsby.jpg"),
  text: "Grimsby",
  subtext: "2022",
}, ] 

export default function SuggestionFlatList() {
  const flatList = (item) => {
    return(
        <SuggestionCard image={item.item.image} text={item.item.text} subtext={item.item.subtext} />
    );

  };

  return(
    <View>
        <FlatList data={actions} renderItem={flatList} horizontal/>
    </View>
  );
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
