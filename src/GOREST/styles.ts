import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    width: Dimensions.get('window').width,
  },

  button: {
    marginTop: 10,
    paddingLeft: 40,
    paddingTop: 10,
    flex: 0.1,
    height: Dimensions.get('window').height * 0.5,
    width: Dimensions.get('window').width * 0.5,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  text: {
    marginTop: 10,
    fontSize: 20,
  },
  flat: {
    flex: 1,
    padding: 10,
  },
  ItemContainer: {
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
});
