import { StyleSheet, Text, View, Button, SafeAreaView, Dimensions} from 'react-native';

function ExploreTopics(props){
    return(
        <View style = {styles.container}>
            <Text style = {styles.topicTheme}>{props.materia}</Text>
        </View>
    )
}

export default ExploreTopics;

const styles = StyleSheet.create({
    container:{
    marginTop: 15,
    width: Dimensions.get("window").width*.9,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 10
        
    },
    topicTheme:{
        color: "white",
        fontSize: 16
        
    },

})