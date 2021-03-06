import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'
//import {SafeAreaView} from 'react-native-safe-area-context';


export default function Header({ height }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { colors } = useTheme()
  // const currentTheme = useSelector(state => {

  //   return state.myDarMode
  // })
  const mycolor = colors.iconColor
  return (
    <View style={{
      marginTop: 1,
      position: 'relative',

      top: 0,
      left: 0,
      right: 0,
      height: 48,
      backgroundColor: colors.headerColor,
      flexDirection: "row",
      justifyContent: "space-between",
      elevation: 5,
    }}>
      <View style={{
        flexDirection: "row",
        margin: 5
      }}>
        <AntDesign
          style={{
            marginLeft: 20,
            marginTop: 1
          }}
          name="youtube" size={32} color="blue" />
        <Text style={{
          fontSize: 22,
          marginLeft: 5,
          color: mycolor,
          fontWeight: "bold"
        }}>uTube</Text>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: 150,
        margin: 5
      }}>
        <MaterialIcons name="keyboard-voice" size={32} color={mycolor} />
        <Ionicons name="md-videocam" size={32} color={mycolor} />
        <Ionicons name="md-search" size={32} color={mycolor}
          onPress={() => navigation.navigate("search")}

        />
        <MaterialIcons name="account-circle" size={32} color={mycolor}

        onPress={()=>navigation.navigate("login")}
        />
      </View>
    </View>
  );



}
