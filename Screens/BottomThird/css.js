import {StyleSheet, Text, View} from 'react-native';
import {font_black, font_secondary, secondary, secondary_light, white} from '../../Utils/colors';
import {bold, medium} from '../../Utils/fontFamily';
import {font3, font4, font6, font7} from '../../Utils/fontSize';
export default StyleSheet.create({
  headerUppdrag: {
    padding: 20,
    backgroundColor:secondary_light
  },
  headerBarcircle: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: 10,
    margin: 3,
  },
  headerBarcircleTxt: {
    fontSize: font3,
    fontFamily: medium,
    textAlign: 'center',
    color: font_black,
  },
  headerBarcircleMain: {
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boldTxt:{
    fontFamily: bold,
    fontSize: font6,
    color: font_black,
    textAlign: 'center',
    marginVertical: 10,
  },
  ratingboldTxt:{
    fontFamily: bold,
    fontSize: font7,
    color: font_black,
    textAlign: 'center',
    marginVertical: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: white,
    elevation: 2,
    shadowOpacity: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 15,
  },
  circleImg: {width: 25, height: 25},
  headerTxt: {
    fontSize: font4,
    marginTop: 5,
    width: 70,
    textAlign: 'center',
    color: font_black
  },
});
