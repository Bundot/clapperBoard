import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function RatingComponent({star = 3, totalstars = 5}){
    // variable to hold the rendered components i.e the stars
    var star_container= [];

    //logic function
    const renderLogic = () => {
        for (var i=0 i < totalstars - star; i++)
        star_container.push(</>)
    };
    renderLogic();
    return (
        <View>
            <Text>Hello</Text>   
        </View>
    )
}

const styles= StyleSheet.create({
    container:{

    }
})