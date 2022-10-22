import {StyleSheet, Text, View} from 'react-native';
import {font_black, font_secondary, secondary, white} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font3, font4} from '../../Utils/fontSize';

export default StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: white,
    elevation: 1,
    shadowOpacity: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 15,
  },
  circleImg: {width: 25, height: 25},
  line: {
    borderWidth: 0.4,
    opacity: 0.2,
    borderColor: font_secondary,
  },
  dotCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: font_black,
    marginRight: 4,
  },
  headerTxt: {
    fontSize: font4,
    marginTop: 5,
    width: 70,
    textAlign: 'center',
    color: font_black,
  },
  modalHeadingTxt: {
    fontFamily: medium,
    fontSize: font4,
    flex: 0.9,
    color: font_black,
  },
  modalHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalCross: {paddingVertical: 5, flex: 0.1, alignItems: 'center'},
  modalTxt: {fontSize: font4, fontFamily: medium, color: font_black},
  modalLocationRww: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: white,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  filterTxt: {fontFamily: medium, fontSize: font4, color: font_black},
  detailClip: {
    fontFamily: medium,
    fontSize: font3,
    marginLeft: 10,
    color: font_black,
  },
  filterView: {
    backgroundColor: white,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  detailClipView: {
    backgroundColor: secondary,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5,
  },
  main: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
