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
import LoginScreen from './src/screens/LoginScreen';
//import {SafeAreaView} from 'react-native-safe-area-context';



// const customDarkTheme={
//   ...DarkTheme,
//   colors:{
//     ...DarkTheme.colors,
//     headerColor:"#404040",
//     iconColor:"white",
//     tabIcon:"white"
//   }
// }

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
  cardData:reducer
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

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        }else if(route.name === 'Subscribe'){
          iconName = 'subscriptions'
        }else if(route.name === 'Library'){
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
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Explore" component={ExploreScreen} />
      <Tabs.Screen name="Subscribe" component={SubScreen} />
      <Tabs.Screen name="Library" component={LibraryScreen} />
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

  return (
 
      <NavigationContainer theme={customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
          <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default App;

