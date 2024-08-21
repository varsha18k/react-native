import React, { useState, useEffect, useDebugValue } from "react";
import data from "../data/data.json";
import { signOut } from "firebase/auth";
import {auth} from '../config/firebase';
import { useSelector } from "react-redux";
import { styles } from '../theme/home';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Button,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const [dataSource, setDataSource] = useState([]);
  const splitName = user.email.split("@")[0];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      BackHandler.exitApp();
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    setDataSource(data);
  }, []);

  useEffect(() => {
    const displayName = splitName;
    console.log(displayName);
    navigation.setOptions({
      title: `Welcome ${displayName}`,
      headerRight: () => (
        <Button onPress={handleLogout} title="Logout" color="#000" />
      ),
    });
  }, [navigation, splitName]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("Detail", { item })}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/home.png")} />
      </View>

      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

