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
import {bold, medium} from '../../../Utils/fontFamily';
import {font3, font4, font6} from '../../../Utils/fontSize';
import {tick,minus,
  plus} from '../../../Utils/images';

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
    title: 'Karlskrona kommun'
  }]
},
{
  p_id:1,
  title: 'Dalarnas Lan',
  child:[{
    id:2,
    title: 'Alvdalens kommun'
  },
  {
    id:3,
    title: 'Borlange kommun'
  },
  {
    id:3,
    title: 'Falun kommun'
  }]
}
]
const Omraden = props => {
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
        Vart vill ni jobba?
      </Text>
      <View
        style={{
          marginBottom: 20,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 0.48}}>
          <Text style={{fontSize: font4, marginBottom: 10,color: font_black}}>POSTNUMMER</Text>
          <Textinput
            type={'normal'}
            placeholder={'Postnummer'}
            // borderRadius={25}
            height={50}
            onchange={setPostnummer}
            value={postnummer}
            txtcolor={font_black}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
        <View style={{flex: 0.48}}>
          <Text style={{fontSize: font4, marginBottom: 10,color: font_black}}>RADIE</Text>
          <Textinput
            type={'normal'}
            placeholder={'Radie (km)'}
            // borderRadius={25}
            height={50}
            onchange={setRadie}
            value={radie}
            txtcolor={font_black}
            borderColor={'#000'}
            // backColor={gray}
          />
        </View>
      </View>
      <View style={{padding: 10}}>
        <View style={{marginHorizontal: 10, marginVertical: 20}}>
          <PrimaryButton
            label={'Valj'}
            height={50}
            lblSize={font4}
            onClick={() => {}}
            borderRadius={30}
            backgroundColor={secondary_light}
            fill={font_black}
            txtFamily={medium}
            brw={1}
            brColor={font_black}
          />
        </View>
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

export default memo(Omraden);
