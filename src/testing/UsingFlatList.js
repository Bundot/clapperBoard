import { FlatList, Image,StyleSheet, Text, View } from 'react-native';
import SuggestionCard from '../components/SuggestionCard';

//creating a list
const actions=["Login","SignUp", "SignIn", "ForgotPassword", "LogOut", "Register", "dw", "lf", "sf", ";lsd"]

export default function UsingFlatList() {
    console.log(actions);
    console.log(actions[3])

    //function for flat list item
    const flastListItem = () => {
        return <Text>Hello Boss</Text>
    };
  return (
    <View style={styles.container}>
        <Text> Hello </Text>

        <FlatList data={actions} renderItem={flastListItem} horizontal={true}/>

        <SuggestionCard/>
    </View>

    
  );
  
}
 
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    marginTop: 100
    
  },
});
