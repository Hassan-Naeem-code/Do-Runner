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
  title: 'Vilka uppdragsgivare vill du fa uppdrag ifran',
  child:[{
    id:1,
    title: 'Privatpersoner'
  },
  {
    id:2,
    title: 'Myndigheter'
  },
  {
    id:3,
    title: 'Foretag'
  },
  {
    id:4,
    title: 'Bostadsrattsforening'
  },
  {
    id:5,
    title: 'Ovriga'
  },
 ]
},
{
  p_id:2,
  title: 'Vilka storlekar pa uppdrag vill du bevaka',
  child:[{
    id:1,
    title: 'Small'
  },
  {
    id:2,
    title: 'Medium & Large'
  },
  {
    id:3,
    title: 'X-Large'
  },
 ]
},
]

const Storlek = props => {
  const [radie, setRadie] = useState('');
  const [collapse, setCollapse] = useState([]);
  const [postnummer, setPostnummer] = useState('');
  const [update, setUpdate] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [checked, setChecked] = useState('unchecked');

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
      
        <View style={{marginTop: 5,marginBottom:10}}>

         {arr.length && arr.map((data,ind)=>
         
         <View key={ind}>
         <Text
         style={{
           fontFamily: medium,
           fontSize: font4,
           color: font_black,
         }}>
        {data?.title}
       </Text>
          {data?.child.map((val,i)=>
            <View key={i} style={styles.omradenRadioRow}>
            <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            </View>
            <View style={{flex: 0.9}}>
              <Text style={styles.installingCheckTxt}>
              {val?.title}
              </Text>
            </View>
            
          </View>)}
         </View>
          )}
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

export default memo(Storlek);
