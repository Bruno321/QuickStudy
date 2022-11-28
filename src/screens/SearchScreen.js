import { StyleSheet, Text, View, Button, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BuscadorComponent from '../components/BuscadorComponent';

function SearchScreen(){
    return(
        <ScrollView style={styles.container}>
            <View style = {styles.searchContainer}>
            <BuscadorComponent/>
            </View>
            <Text style= {styles.suggestSearchTitle}>Pantalla de Búsqueda</Text>
        </ScrollView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width*1,
        height: Dimensions.get("window").height*1,
        backgroundColor: "#0F172A"
    },
    searchContainer:{
        marginTop: 30
    },
    suggestSearchTitle: {
        fontSize: 20,
        color: "white",
        marginTop: 10,
        marginLeft: 20
    }
})