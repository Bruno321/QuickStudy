import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PremiumBtn from "../components/PremiumBtn";
import ExploreTopics from "../components/ExploreTopics";

function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.viewPremiumBtn}>
          <PremiumBtn />
        </View>
        <View style={styles.mainStartedView}>
          <Text style={styles.startedText}>
            ¿Por dónde{"\n"}quieres empezar?
          </Text>
          <View style = {styles.btnContainer}>
            <View style={styles.searchButton}>
              <Text style={styles.titleBtn}>Buscar</Text>
              <Text style={styles.informationBtn}>Cuestionarios{"\n"}creados por otros{"\n"}usuarios</Text>
            </View>
            <View style={styles.createButton}>
              <Text style={styles.titleBtn}>Crear</Text>
              <Text style={styles.informationBtn}>Tus propios{"\n"}cuestionarios</Text>
            </View>
          </View>
        </View>

        <View style={styles.ExploreTopicsView}>
          <Text style={styles.titleExploreTxt}>Explorar temas</Text>
          <View style = {styles.btnTopicsView}>
          <ExploreTopics materia="Español"/>
          <ExploreTopics materia="Quimica"/>
          <ExploreTopics materia="Matematicas"/>
          <ExploreTopics materia="Historia"/>
          <ExploreTopics materia="Programación"/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F172A",
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").height * 1,
  },
  viewPremiumBtn: {
    width: Dimensions.get("window").width * 1,
    // backgroundColor: "purple",
    marginTop: 25,
    marginRight: -20,
    flexDirection: "row-reverse",
    // marginLeft: 175
  },
  mainStartedView: {
    // backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  startedText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  btnContainer:{
    marginTop: 15,
    flexDirection: "row"
  },
  searchButton:{
    width: 130,
    height: 110,
    backgroundColor: "#334155",
    borderRadius: 10,
  },
  createButton:{
    marginLeft: 15,
    width: 130,
    height: 110,
    backgroundColor: "#334155",
    borderRadius: 10,
  },
  titleBtn:{
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    color: "white"
  },
  informationBtn: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14,
    color: "white",
    fontWeight: "100"

  },
  ExploreTopicsView: {
    marginTop: 25,
  },
  titleExploreTxt: {
    color: "white",
    fontSize: 14,
  },
  btnTopicsView:{
    width: Dimensions.get("window").width*1,
    height: "auto",
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  }
});
