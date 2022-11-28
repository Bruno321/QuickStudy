import React from "react";
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';

const AddBtn = () =>{
    return (
        <TouchableOpacity>
            <View style = {styles.btnContainer}>
            <AntDesign name="pluscircle" size={50} color="#6584CB" />
            </View>
        </TouchableOpacity>
    )
}

export default AddBtn;

const styles = StyleSheet.create({
    btnContainer: {
        width: 50,
        height: 50,
        borderRadius: 25, 
        backgroundColor: "#0F172A"
    }
})