import {StyleSheet} from 'react-native';
import {HomeScreenClr} from '../../Constants/colors';
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: HomeScreenClr.backgroundClr,
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: HomeScreenClr.searchBarBkg,
    padding: 8,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: '600',
    color: HomeScreenClr.categoriesTitle,
    marginBottom: 12,
  },
});

export {styles};
