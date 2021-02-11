import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Animated } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import { useSelector } from 'react-redux'


const HomeScreen = ()=> {
  // const scrollY = new Animated.Value(0)
  // const diffClamp = Animated.diffClamp(scrollY, 0, 45)
  // const translateY = diffClamp.interpolate({
  //   inputRange: [0, 45],
  //   outputRange: [0, -45]
  // })
  const cardData = useSelector(state => {
    return state.cardData
  })
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {/* <Animated.View
        style={{
          transform: [
            { translateY: translateY }
          ],
          elevation: 4,
          zIndex: 100
        }}>
      </Animated.View> */}
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
        // onScroll={(e) => {
        //   scrollY.setValue(e.nativeEvent.contentOffset.y)
        // }}
      />
    </View>
  );
}

export default  HomeScreen