import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import HomeScreen from './src/screens/HomeScreen';
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer'
import ExploreScreen from './src/screens/ExploreScreen'
import SubScreen from './src/screens/SubScreen'
import LibraryScreen from './src/screens/LibraryScreen'
import {reducer} from './src/reducers/reducer'
import {themeReducer} from './src/reducers/themeReducer'
import {Provider,useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'
//import {SafeAreaView} from 'react-native-safe-area-context';



const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"blue"
  }
}

const rooReducer = combineReducers({
  cardData:reducer, //[],
  myDarMode:themeReducer//false
})
const store = createStore(rooReducer)


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = ()=>{
  const {colors} = useTheme()
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }else if(route.name === 'suscribe'){
          iconName = 'subscriptions'
        }else if(route.name === 'library'){
          iconName = 'video-library'
        }
        return <MaterialIcons name={iconName} size={30} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="home" component={HomeScreen} />
      <Tabs.Screen name="explore" component={ExploreScreen} />
      <Tabs.Screen name="subscribe" component={SubScreen} />
      <Tabs.Screen name="library" component={LibraryScreen} />
    </Tabs.Navigator>
  )
}

const App = ()=>{
  return(
     <Provider store={store}>
      <Navigation />
    </Provider>
  )
 
}

export function Navigation() {

  let currentTheme = useSelector(state=>{
    return state.myDarMode
  })
  return (
 
      <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default App;

