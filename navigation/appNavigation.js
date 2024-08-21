import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailedScreen from '../screens/DetailedScreen';
import SignupScreen from '../screens/SignupScreen';
import {useSelector, useDispatch} from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../config/firebase';
import {setUser, setUserLoading} from '../redux/slices/user';
import {useEffect} from 'react';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, newUser => {
      console.log('APK: onAuthStateChanged Called');
      if (newUser) {
        console.log('APK: User UID ', newUser.uid);
        console.log('APK: User email ', newUser.email);
        console.log('APK: User displayName ', newUser.displayName);
        const userData = {
          uid: newUser.uid,
          email: newUser.email,
          displayName: newUser.displayName,
        };
        dispatch(setUser(userData));
      } else {
        dispatch(setUser(null));
      }
      dispatch(setUserLoading(false));
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  // if (userLoading) {
  //   // You can return a loading spinner or some kind of loading screen here
  //   return null;
  // }

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: true}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="Detail"
            component={DetailedScreen}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Hello Anonymouss">
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SignUp"
            component={SignupScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
