import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from 'react-native';
import {
  font_black,
  font_secondary,
  primary,
  secondary,
  white,
} from '../../Utils/colors';
import {bold, medium} from '../../Utils/fontFamily';
import {font4, font6} from '../../Utils/fontSize';
import {trophy, star} from '../../Utils/images';
import Rating from './rating';
import styles from './css';
let headerArr = [
  {
    id: 0,
    title: '1v',
  },
  {
    id: 1,
    title: '1m',
  },
  {
    id: 2,
    title: 'i ar',
  },
  {
    id: 3,
    title: 'i ar',
  },
  {
    id: 4,
    title: '3 ar',
  },
  {
    id: 5,
    title: 'sedan start',
  },
];
const uppdrag = () => {
  const [barStatus, setbarStatus] = useState(0);
  const [selected, setselected] = useState(0);

  return (
    <SafeAreaView>
      {selected == 0 ? (
        <>
          <View style={styles.headerUppdrag}>
            <Text
              style={{fontFamily: medium, fontSize: font4, color: font_black}}>
              Totalt realiserat ordervarde pa 0 vunna uppdrag
            </Text>
            <Text style={styles.boldTxt}>0 Kr</Text>
            <View
              style={{
                borderColor: font_black,
                borderTopWidth: 1,
                borderBottomWidth: 1,
              }}>
              <View style={styles.headerBarcircleMain}>
                {headerArr?.length &&
                  headerArr.map((data, ind) => (
                    <TouchableHighlight
                      key={ind}
                      underlayColor={secondary}
                      onPress={() => setbarStatus(data?.id)}
                      style={[
                        styles.headerBarcircle,
                        {
                          backgroundColor:
                            barStatus == data?.id ? font_black : null,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.headerBarcircleTxt,
                          {color: barStatus == data?.id ? white : font_black},
                        ]}>
                        {data?.title}
                      </Text>
                    </TouchableHighlight>
                  ))}
              </View>
            </View>
            <View style={styles.headerBarcircleMain}>
              <View style={{width: 80, alignItems: 'center'}}>
                <TouchableHighlight
                  underlayColor={font_secondary}
                  onPress={() => {
                    setselected(0);
                  }}
                  style={[
                    styles.circle,
                    {backgroundColor: selected == 0 ? primary : white},
                  ]}>
                  <Image style={styles.circleImg} source={trophy} />
                </TouchableHighlight>
                <Text style={styles.headerTxt}>Uppdrag</Text>
              </View>
              <View style={{width: 80, alignItems: 'center'}}>
                <TouchableHighlight
                  underlayColor={font_secondary}
                  onPress={() => {
                    setselected(1);
                  }}
                  style={[
                    styles.circle,
                    {backgroundColor: selected == 1 ? primary : white},
                  ]}>
                  <Image style={styles.circleImg} source={star} />
                </TouchableHighlight>
                <Text style={styles.headerTxt}>omdomen</Text>
              </View>
            </View>
          </View>
          <ScrollView contentContainerStyle={{paddingVertical: 10}}>
            <Text
              style={{
                color: font_black,
                fontFamily: medium,
                fontSize: font4,
                textAlign: 'center',
              }}>
              Dett finns inga kopta uppdrag
            </Text>
          </ScrollView>
        </>
      ) : (
        <Rating selected={selected} onSelected={val => setselected(val)} />
      )}
    </SafeAreaView>
  );
};

export default uppdrag;
