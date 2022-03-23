import React, {memo, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Checkbox,Switch } from 'react-native-paper';
import Textinput from '../../../Components/Input';
import PrimaryButton from '../../../Components/primaryButton';
import {font_black, primary, white} from '../../../Utils/colors';
import { medium } from '../../../Utils/fontFamily';
import {font3, font4} from '../../../Utils/fontSize';
import styles from '../css'
const Installning = props => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 20}}>
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: font4, marginBottom: 10}}>
          NAME PA BEVAKNING
        </Text>
        <Textinput
          type={'normal'}
          placeholder={'Mina branscher & omraden'}
          // borderRadius={25}
          height={50}
          onchange={setName}
          value={name}
          txtcolor={font_black}
          borderColor={'#000'}
          // backColor={gray}
        />
      </View>
      <View style={{}}>
        <Text style={{fontSize: font4, marginBottom: 10}}>
          EMAIL
        </Text>
        <Textinput
          type={'normal'}
          placeholder={'@infobobbemanning.se'}
          // borderRadius={25}
          height={50}
          onchange={setEmail}
          value={email}
          txtcolor={font_black}
          borderColor={'#000'}
          // backColor={gray}
        />
      </View>
      <View style={{marginVertical:30}}>
      <View style={styles.installingCheckRow}>
         <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              style={{backgroundColor:'red'}}
            />
          </View>
          <View style={{flex: 0.9}}>
            <Text style={styles.installingCheckTxt}>Daglig sammanstallning</Text>
          </View>
        </View>
        <View style={[styles.installingCheckRow,{marginTop:10}]}>
         <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              style={{backgroundColor:'red'}}
            />
          </View>
          <View style={{flex: 0.9}}>
            <Text style={styles.installingCheckTxt}>Omedelbar notifiering</Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <Text style={{fontSize: font4, marginBottom: 10}}>
          SMS SKICKAS TILL
        </Text>
        <Textinput
          type={'normal'}
          placeholder={'+46769495991'}
          // borderRadius={25}
          height={50}
          onchange={setEmail}
          value={email}
          txtcolor={font_black}
          borderColor={'#000'}
          // backColor={gray}
        />
      </View>

      <View style={{marginVertical:30}}>
      <View style={styles.installingCheckRow}>
         <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              style={{backgroundColor:'red'}}
            />
          </View>
          <View style={{flex: 0.9}}>
            <Text style={styles.installingCheckTxt}>Omedelbar notifiering</Text>
          </View>
        </View>
        <View style={[styles.installingCheckRow,{marginTop:10}]}>
         <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              style={{backgroundColor:'red'}}
            />
          </View>
          <View style={{flex: 0.9}}>
            <Text style={styles.installingCheckTxt}>Notifiering via SMS for osalda uppdrag</Text>
          </View>
        </View>
        <Text style={[styles.installingCheckTxt,{fontSize:font3}]}>Osalda uppdragg ger okad chans till after da uppdragsgivaren saknar offerter. Dessutom har antalet platser reducerats till 3.</Text>
      </View>
     
      <View style={[styles.installingCheckRow]}>
         
          <View style={{flex: 0.9}}>
            <Text style={styles.installingCheckTxt}>Aktivera bevakning</Text>
          </View>
          <View style={{flex: 0.1}}>
         <Switch value={isSwitchOn} onValueChange={()=>setIsSwitchOn(!isSwitchOn)} color='#000' />
          </View>
        </View>

        <View style={{marginHorizontal:10,marginTop:20,borderWidth:1,borderColor:primary,padding:10,backgroundColor:primary,borderRadius:10}}>
              <Text style={{fontSize:font4,fontFamily:medium}}>Du kan avaktivera din profit .ex nar du gar semester sa att du inte far matchningsmall och sms.</Text>
        </View>
        <View style={{marginHorizontal:10,marginTop:20}}>
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

export default memo(Installning);
