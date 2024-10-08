export const colors = {
  heading: 'text-gray-700',
  button: '#50c878',
  expenseCell: '#8dd278',
};




import { StyleSheet } from "react-native-web";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingTop: 20,
  },
  innerContainer: {
    marginTop: 8,
    position: 'relative',
  },
  heading: {
    color: colors.heading,
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
  inputContainer: {
    marginHorizontal: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: colors.heading,
  },
  input: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 15,
  },
  button: {
    marginVertical: 20,
    padding: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchScreenText: {
    textAlign: 'center',
    color: colors.button,
    marginBottom: 20,
    fontSize: 16,
  },
});

