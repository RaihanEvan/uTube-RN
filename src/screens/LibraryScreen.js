import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'


const LibraryScreen = ()=>{
   return(
       <View style={{flex:1}}>
           <Header />
           <Text style={{
               margin:80,
               fontSize:22,
               borderBottomWidth:1
           }}>Recently Viewed</Text>
           
       </View>
   )
}

export default LibraryScreen