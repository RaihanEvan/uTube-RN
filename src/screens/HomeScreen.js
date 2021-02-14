import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Animated } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import { useSelector } from 'react-redux'


const HomeScreen = ()=> {
  const cardData = useSelector(state => {
    return state.cardData
  })
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Text style={{
               margin:10,
               fontSize:18,
               borderBottomWidth:1
           }}>Recommended Videos</Text>
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return <Card
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
          />
        }}

        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
}

export default  HomeScreen