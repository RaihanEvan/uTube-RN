import React from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';

const VideoPlayer = ({route})=>{
    const {videoId,title,description} = route.params
   return(
       <View style={{
           flex:1,
        marginTop:1
        }}>
           <View style={{
               width:"100%",
               height:200
           }}>
              <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
               source={{uri:`https://www.youtube.com/embed/${videoId}`}}
              />

           </View>
           <Text style={{
               fontSize:20,
               width:Dimensions.get("screen").width - 50,
               margin:8
           }}
           numberOfLines={3}
           ellipsizeMode="tail"
           >
             {title}
           </Text>
           <Text style={{
               fontSize:10,
               width:Dimensions.get("screen").width - 20,
               margin:8
           }}
           numberOfLines={7}
           ellipsizeMode="tail"
           >
             {description}
           </Text>
           <View
             style={{borderBottomWidth:2}}
           />
       </View>
   )
}

export default VideoPlayer