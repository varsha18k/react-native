import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import { styles } from '../theme/detailed';

const DetailedScreen = ({ route }) => {
  const { item } = route.params;
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('hi');
    const fetchToDo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const json = await response.json();
        console.log('hi1');
        setTodo(json);
      } catch (error) {
        console.error("Error", error);
        console.log('hi2');
      } finally {
        setLoading(false);
      }
    };
    fetchToDo();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>;
  }

  return (
    <ImageBackground
      source={require("../assets/flag.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.spacer} />
      <View style={styles.container}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ImageBackground>
  );
};

export default DetailedScreen;
