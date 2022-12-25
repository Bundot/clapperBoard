import { StatusBar } from 'expo-status-bar';
//import {StatusBar} from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <Text style={{color: "white"}}>{text}</Text>
    </View>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  container: {
    height: 58,
    width: 250,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
