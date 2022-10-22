import React, {memo, useState} from 'react';
import {View, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import {Checkbox, RadioButton, Switch} from 'react-native-paper';
import Textinput from '../../../Components/Input';
import PrimaryButton from '../../../Components/primaryButton';
import {
  font_black,
  font_secondary,
  primary,
  secondary_light,
  white,
} from '../../../Utils/colors';
import {bold, medium, regular} from '../../../Utils/fontFamily';
import {font3, font4, font6} from '../../../Utils/fontSize';
import {tick,minus,
  plus,hammer,paint_brush,electric_plug,water_tap,cap} from '../../../Utils/images';

import styles from '../css';

let arr=[{
  p_id:1,
  title: 'Blekinge lan',
  child:[{
    id:2,
    title: 'Karishmans kommun'
  },
  {
    id:3,
    title: 'Karishmans kommun'
  }]
},
{
  p_id:1,
  title: 'Dalarnas Lan',
  child:[{
    id:2,
    title: 'Karishmans kommun'
  },
  {
    id:3,
    title: 'Karishmans kommun'
  },
  {
    id:3,
    title: 'Karishmans kommun'
  }]
}
]
let opt2Arr = [
  {
    img: hammer,
    title: 'Bugg',
  },
  {
    img: hammer,
    title: 'Stad',
  },
  {
    img: hammer,
    title: 'Flytt',
  },
  {
    img: paint_brush,
    title: 'Malning',
  },
  {
    img: electric_plug,
    title: 'EI',
  },
  {
    img: water_tap,
    title: 'Rormokare',
  },
  {
    img: cap,
    title: 'Alla jobb',
  },
];
const Kategorier = props => {
  const [radie, setRadie] = useState('');
  const [collapse, setCollapse] = useState([]);
  const [postnummer, setPostnummer] = useState('');
  const [update, setUpdate] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onSpend=(ind)=>{
    if(collapse.length)
    {
      const index = collapse.indexOf(ind);
      if (index > -1) {
        collapse.splice(index, 1);
        setUpdate(!update)
      }
      else{
        collapse.push(ind)
        setUpdate(!update)
      }
    }
    else {
      collapse.push(ind)
      setUpdate(!update)
    }
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding: 20}}>
      <Text
        style={{
          fontFamily: medium,
          fontSize: font6,
          color: font_black,
          textAlign: 'center',
        }}>
        Valj typ av jobb
      </Text>

      <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
              {opt2Arr?.length &&
                opt2Arr.map((data, ind) => (
                  <View
                    key={ind}
                    style={{width: 80, alignItems: 'center', padding: 10}}>
                    <TouchableHighlight
                      underlayColor={font_secondary}
                      onPress={() => {}}
                      style={[
                        styles.circle,
                        {borderColor: font_black, borderWidth: 1},
                      ]}>
                      <Image style={styles.circleImg} source={data?.img} />
                    </TouchableHighlight>
                    <Text
                      style={[
                        styles.headerTxt,
                        {color: font_black, marginTop: 5},
                      ]}>
                      {data?.title}
                    </Text>
                  </View>
                ))}
            </View>
      <View style={{padding: 10}}>
       
        <View style={{marginVertical: 30}}>
         {arr.length && arr.map((data,ind)=>
         <>
          <View key={ind} style={styles.omradenRadioRow}>
            <TouchableHighlight onPress={() => onSpend(ind)} underlayColor={secondary_light} style={{flex: 0.1,padding:5}}>
              <View style={[styles.tickCircle,{backgroundColor:font_secondary}]}>
                <Image style={{width: 14, height: 14,tintColor:white}} source={plus} />
              </View>
            </TouchableHighlight>
            <View style={{flex: 0.8}}>
              <Text style={styles.installingCheckTxt}>
              {data?.title}
              </Text>
            </View>
            <View style={{flex: 0.1}}>
              <TouchableHighlight onPress={() => {}} underlayColor={secondary_light} style={styles.tickCircle}>
                <Image style={{width: 14, height: 14}} source={tick} />
              </TouchableHighlight>
            </View>
          </View>
          {
            collapse.length && collapse.includes(ind) ?
            data?.child && data?.child.map((val,i)=>
              <View key={i} style={styles.omradenRadioRow}>
            <View onPress={() => {}} underlayColor={secondary_light} style={{flex: 0.1,padding:5}}/>
              
            <View style={{flex: 0.8}}>
              <Text style={styles.installingCheckTxt}>
              {val?.title}
              </Text>
            </View>
            <View style={{flex: 0.1}}>
              <TouchableHighlight onPress={() => {}} underlayColor={secondary_light} style={styles.tickCircle}>
                <Image style={{width: 14, height: 14}} source={tick} />
              </TouchableHighlight>
            </View>
          </View>)
          : null
          }
          </>
          )}
        </View>
        <Text style={{textAlign:'center',fontSize:font3,fontFamily:regular,color: font_black}}>Du kan alltid andra det har i efterhand under installningar</Text>
      </View>
     
      <View style={{marginHorizontal: 10, marginTop: 20}}>
        <PrimaryButton
          label={'Spara'}
          height={50}
          lblSize={font4}
          onClick={() => {}}
          borderRadius={30}
          backgroundColor={primary}
          fill={font_black}
          txtFamily={medium}
        />
      </View>
    </ScrollView>
  );
};

export default memo(Kategorier);
