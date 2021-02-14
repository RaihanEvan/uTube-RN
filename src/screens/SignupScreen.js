import React from 'react';
import { StyleSheet, Text, View,Image,
  TextInput,
  Button,
  TouchableOpacity } from 'react-native';
//import Header from '../components/Header'
import { StatusBar } from "expo-status-bar";
//import React, { useState } from "react";


const SignupScreen = ()=>{
   return(
    <View style={styles.container}>
    <Image style={styles.image} source={require("../../assets/icon.png")} />
    <Text style={{marginBottom:20}}>Signning Up For uTube!</Text>

    <StatusBar style="auto" />
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Full Name"
        placeholderTextColor="white"
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="white"
        //onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
        //onChangeText={(password) => setPassword(password)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password"
        placeholderTextColor="white"
        secureTextEntry={true}
        //onChangeText={(password) => setPassword(password)}
      />
    </View>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
);
}



export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  image: {
    marginBottom: 40,
    width:'60%',
    height:'30%'
  },
  
  inputView: {
    backgroundColor: "blue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "gray",
  },
  });