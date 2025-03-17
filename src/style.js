import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contadorText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: 150,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 150,
    marginVertical: 10,
  },
  buttonIncrementar: {
    backgroundColor: 'green',
  },
  buttonDecrementar: {
    backgroundColor: 'red',
  },
  buttonZerar: {
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
