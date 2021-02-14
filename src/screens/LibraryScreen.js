import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import Card from '../components/Card'




const LibraryScreen = ()=>{
    const cardData = useSelector(state=>{
        return state.cardData
      })
   return(
       <View style={{flex:1}}>
           <Header />
           <Text style={{
               margin:7,
               fontSize:22,
               borderBottomWidth:1
           }}>Recently Viewed</Text>
           <FlatList 
                data={cardData}
                renderItem={({item})=>{
                    return <Card
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                
                    />
                }}

                keyExtractor={item=>item.id.videoId}
                />
           
       </View>
   )
}

export default LibraryScreen