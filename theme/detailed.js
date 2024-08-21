import { shadow } from 'react-native-paper';
import {StyleSheet} from 'react-native-web';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',    
    padding: 10,
  },
  background:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
    alignContent:'center'
  },
  spacer:{
    flex:1
  },  
  title:{
    fontSize:24,
    fontWeight: 'bold',
    paddingBottom:10
  },
  description:{
    fontSize:16,
    color: '#555',
    marginBottom:10
  }
});
