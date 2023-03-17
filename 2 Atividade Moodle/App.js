import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen'
import SumScreen from './src/screens/SumScreen/SumScreen'
import ResultScreen from './src/screens/ResultScreen/ResultScreen'




const Stack = createNativeStackNavigator()

export default function App(){
  return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="Welcome" component={WelcomeScreen}/>
              <Stack.Screen name="Sum" component={SumScreen}/>
              <Stack.Screen name="Result" component={ResultScreen}/>
          </Stack.Navigator>
          <StatusBar style="Auto"/>
      </NavigationContainer>
  )
}