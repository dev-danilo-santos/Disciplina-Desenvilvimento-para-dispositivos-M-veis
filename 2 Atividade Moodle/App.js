import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import StartScreen from './src/screens/StartScreen/index'
import HomeScreen from './src/screens/HomeScreen/index'
import UserDetailsScreen from './src/screens/UserDetailScreen/index'
import AboutScreen from './src/screens/AboutScreen/index'


const Stack = createNativeStackNavigator()

export default function App(){
  return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Start" component={StartScreen}/>
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="UserDetails" component={UserDetailsScreen}/>
              <Stack.Screen name="About" component={AboutScreen}/>
          </Stack.Navigator>
          <StatusBar style="Auto"/>
      </NavigationContainer>
  )
}