import { ImageBackground, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import CastDetails from '../components/CastDetails';
import ContinueWatchingCardss from '../components/ContinueWatchingCardss';
const actions= [{
    image: require("../../assets/images/AdamE.png"),
    text: "Adam Espeason",
    subtext: "As Morbius"
},
{
    image: require("../../assets/images/alexE.png"),
    text: "Alex Edo",
    subtext: "As Edo",
},

]

const actionss =[
    {
        image: require("../../assets/images/KateE.png"),
        text: "Katlyn K",
        subtext: "As Kat" ,
    },
    {
        image: require("../../assets/images/mariaE.png"),
        text: "Bruce Banner",
        subtext: "As Banner" ,
    },
]

export default function CastDetailsFlatList({image, text, subtext}) {
  
    const flatList = (item) => {
      return(
      <CastDetails image={item.item.image} subtext={item.item.subtext} text={item.item.text}/>
      );
    };

    return(
      <View>
      <FlatList data={actions} renderItem={flatList} horizontal />
      <FlatList data={actionss} renderItem={flatList} horizontal/>
      </View>
    );
  
}
 
const styles = StyleSheet.create({
  container: {
    
  },
});
