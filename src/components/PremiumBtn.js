import React from "react";
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PremiumBtn = () =>{
    return(
            <TouchableOpacity>
        <View style ={styles.btnContainer}>
            <View style = {styles.iconView}>
            <AntDesign name="star" size={24} color="#fff" />
            </View>
            <View style = {styles.txtView}>
            <Text style ={styles.txtCambiatePro}>Cambiaste a Pro</Text>
            </View>
        </View>
            </TouchableOpacity>
    );
}

export default PremiumBtn;

const styles = StyleSheet.create({
    btnContainer:{
        width: 150,
        height: 45,
        backgroundColor: "#FD841F",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    iconView: {
        // backgroundColor: "pink",
        width: 24,
        height: 24,
        flex: 1,
        alignItems: 'center',
    },
    txtView:{
        // backgroundColor: "purple",
        flex: 3,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtCambiatePro:{
        marginTop: 15,
        color: "#fff",
        flex: 1,
        textAlign: "center"
    }
})