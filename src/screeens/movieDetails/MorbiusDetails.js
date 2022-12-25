import { View} from "react-native";
import { StyleSheet } from "react-native";
import MoviesInfo from "../MovieInfo";

export default function MorbiusDetails({image, title, year, studio, summary, starusers}) {
    return(
        <View>
            <MoviesInfo image={require('../../../assets/images/morbdt.png')} studio={"Marvel Studios"} summary={"Adipisicing elit deserunt deserunt aute ut cillum elit Lorem occaecat consectetur aliquip qui incididunt incididunt.Veniam in duis duis adipisicing pariatur.Eiusmod ea minim non non adipisicing occaecat dolore ut.Duis anim magna nisi qui veniam reprehenderit nostrud sunt voluptate magna."} 
            title={"Morbius"} year={"2022"} starusers={300} />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {}
});