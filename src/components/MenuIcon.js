import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//importing icons
import {MaterialIcons} from "@expo/vector-icons"


export default function MenuIcon() {
  return (
    <View style={styles.container} >
      <TouchableOpacity>
        <MaterialIcons name='dehaze' size={40} color="white"/>
        </TouchableOpacity>
    </View>
  );
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    justifyContent: "center",
    alignItems: "flex-end",
    //marginRight: 20
  },
});
