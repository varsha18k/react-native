import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import {useNavigation} from '@react-navigation/native';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import Loading from '../components/loading';
import {setUserLoading} from '../redux/slices/user';
import {useDispatch, useSelector} from 'react-redux';
import { styles,colors } from '../theme/login';
export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {userLoading} = useSelector(state => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };


  const handleLogin = async () => {
    if (email && password) {
      // Proceed to save data to FireStore
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
        navigation.navigate('Home');
      } catch (e) {
        dispatch(setUserLoading(false));
       /*  Snackbar.show({
          text: e.message,
          backgroundColor: 'red',
        }); */
      }
    } else {
     /*  Snackbar.show({
        text: 'Email and Password are required!',
        backgroundColor: 'red',
      }); */
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={[styles.heading, { fontSize: 24, fontWeight: 'bold', textAlign: 'center' }]}>
          Sign In
        </Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/login.png')}
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
        onPress={handleLogin}
        style={[styles.button, { backgroundColor: colors.button }]}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.switchScreenText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

