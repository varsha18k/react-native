import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useSelector, useDispatch} from 'react-redux';
import {setUserLoading} from '../redux/slices/user';
import Loading from '../components/loading';
import { styles, colors } from '../theme/signup';
import Snackbar from 'react-native-paper';
export default function SignUpScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {userLoading} = useSelector(state => state.user);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    if (email && password) {
      // Proceed to save data to FireStore
      try {
        //dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        //dispatch(setUserLoading(false));
      } catch (e) {
        dispatch(setUserLoading(false));
       Snackbar.show({
          text: e.message,
          backgroundColor: 'red',
        }); 
      }
    } else {
      // Show Error
   /*    Snackbar.show({
        text: 'Email and Password are required!',
        backgroundColor: 'red',
      }); */
    }
  };

  const navigateToSignIn = () => {
    navigation.navigate('Login');
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={[styles.heading, { fontSize: 24, fontWeight: 'bold', textAlign: 'center' }]}>
          Sign Up
        </Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/signup.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={value => setEmail(value)}
            style={styles.input}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            secureTextEntry
            onChangeText={value => setPassword(value)}
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSignup}
        style={[styles.button, { backgroundColor: colors.button }]}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSignIn}>
        <Text style={styles.switchScreenText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
