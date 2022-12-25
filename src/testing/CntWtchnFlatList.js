import { ImageBackground, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ContinueWatchingCardss from '../components/ContinueWatchingCardss';
const actions= [{
    image: require("../../assets/images/avengers.jpg"),
    text: "Avengers",
    subtext: "Part 4"
},
{
    image: require("../../assets/images/hobbit.jpg"),
    text: "Hobbit",
    subtext: "Part 4",
},
{
    image: require("../../assets/images/inception.jpg"),
    text: "Inception",
    subtext: "Part 4" ,
},

]

export default function CntWtchnFlatList({image, text, subtext}) {
  
    const flatList = (item) => {
      return(
      <ContinueWatchingCardss image={item.item.image} subtext={item.item.subtext} text={item.item.text}/>
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
    
  },
});
