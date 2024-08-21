import {StyleSheet} from 'react-native-web';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  itemContainer:{
    backgroundColor:'#fff',
    padding:15,
    marginVertical:8,
    borderRadius:5,
    shadowColor:'#000',
    shadowOffset:{width:0,height :2},
    shadowOpacity:0.3,
    shadowRadius:2
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    height: 200,
    width: 200,
  },
  title:{
    fontSize:18,
    fontWeight: 'bold'
  },
  description:{
    fontSize:18,
    color: '#555',
    marginTop:5
  }
});
