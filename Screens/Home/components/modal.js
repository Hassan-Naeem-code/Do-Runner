import React, {memo, useState} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import {
  white,
  font_secondary,
  primary,
  font_black,
} from '../../../Utils/colors';
import {bold, medium} from '../../../Utils/fontFamily';
import {font4, font5} from '../../../Utils/fontSize';
import {
  hammer,
  cap,
  electric_plug,
  paint_brush,
  water_tap,
} from '../../../Utils/images';
import styles from '../css';
import {Checkbox, RadioButton} from 'react-native-paper';
import PrimaryButton from '../../../Components/primaryButton';
import Slider from 'react-native-slider';
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
const Loader = props => {
  const [modalVisible, setModalVisible] = useState(props?.modalVisible);
  const [radioValue, setRadioValue] = useState('1');
  const [sliderValue, setSliderValue] = useState(0.2);
  const [checked, setChecked] = useState('unchecked');
  const Location = () => {
    return (
      <View style={styles.modalView}>
        <View style={styles.modalHeaderView}>
          <Text style={styles.modalHeadingTxt}>VaLJ EN BEVAKNINGSPROFIL</Text>
          <TouchableHighlight
            style={styles.modalCross}
            underlayColor={'transparent'}
            onPress={() => props?.onclose()}>
            <Text style={[styles.modalHeadingTxt, {flex: 0}]}>X</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.line, {marginVertical: 10}]} />
        <View style={styles.modalLocationRww}>
          <View style={{flex: 0.9}}>
            <Text style={styles.modalTxt}>
              Mina brancher & omraden brancher
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <RadioButton.Android
              color="#000"
              uncheckedColor="#000"
              status={radioValue === '1' ? 'checked' : 'unchecked'}
              onPress={newValue => {
                console.log(newValue), setRadioValue('1');
              }}
              value={radioValue}
            />
          </View>
        </View>
        <View style={styles.modalLocationRww}>
          <View style={{flex: 0.9}}>
            <Text style={styles.modalTxt}>Mina branscher & omraden kopia</Text>
          </View>
          <View style={{flex: 0.1}}>
            <RadioButton.Android
              color="#000"
              uncheckedColor="#000"
              status={radioValue === '2' ? 'checked' : 'unchecked'}
              onPress={newValue => {
                console.log(newValue), setRadioValue('2');
              }}
              value={radioValue}
            />
          </View>
        </View>
        <View style={styles.modalLocationRww}>
          <View style={{flex: 0.9}}>
            <Text style={styles.modalTxt}>Mina branscher & omraden kopia</Text>
          </View>
          <View style={{flex: 0.1}}>
            <RadioButton.Android
              color="#000"
              uncheckedColor="#000"
              status={radioValue === '3' ? 'checked' : 'unchecked'}
              onPress={newValue => {
                console.log(newValue), setRadioValue('3');
              }}
              value={radioValue}
            />
          </View>
        </View>
        <View style={styles.modalLocationRww}>
          <View style={{flex: 0.9}}>
            <Text style={styles.modalTxt}>Ny bevakning</Text>
          </View>
          <View style={{flex: 0.1}}>
            <RadioButton.Android
              color="#000"
              uncheckedColor="#000"
              status={radioValue === '4' ? 'checked' : 'unchecked'}
              onPress={newValue => {
                console.log(newValue), setRadioValue('4');
              }}
              value={radioValue}
            />
          </View>
        </View>

        <View style={{padding: 30}}>
          <PrimaryButton
            label={'Visa uppdrag'}
            height={50}
            lblSize={font4}
            onClick={() => {}}
            borderRadius={30}
            backgroundColor={primary}
            fill={font_black}
            txtFamily={medium}
          />
        </View>
      </View>
    );
  };

  const Category = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.modalView}>
          <View style={styles.modalHeaderView}>
            <Text style={styles.modalHeadingTxt}>UTOKA BEVAKNING</Text>
            <TouchableHighlight
              style={styles.modalCross}
              underlayColor={'transparent'}
              onPress={() => props?.onclose()}>
              <Text>X</Text>
            </TouchableHighlight>
          </View>
          <View style={[styles.line, {marginVertical: 10}]} />
          <View style={{padding: 10}}>
            <Text style={styles.modalTxt}>UTOKA med omrade</Text>
            <Text
              style={[styles.modalTxt, {textAlign: 'right', fontFamily: bold}]}>
              {sliderValue.toFixed(2)} Km
            </Text>
            <Slider
              value={sliderValue}
              onValueChange={value => setSliderValue(value)}
            />
            <View style={[styles.line, {marginVertical: 10}]} />
            <Text style={[styles.modalTxt, {marginTop: 10}]}>
              UTOKA med kategori
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

            <View style={{padding: 30}}>
              <PrimaryButton
                label={'Visa uppdrag'}
                height={50}
                lblSize={font4}
                onClick={() => {}}
                borderRadius={30}
                backgroundColor={primary}
                fill={font_black}
                txtFamily={bold}
              />
            </View>
            <View style={{paddingHorizontal: 30}}>
              <PrimaryButton
                label={'Rensa'}
                height={50}
                brw={1}
                lblSize={font4}
                onClick={() => {}}
                borderRadius={30}
                brColor={font_black}
                backgroundColor={white}
                fill={font_black}
                txtFamily={bold}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  const Size = () => {
    return (
      <View style={styles.modalView}>
        <View style={styles.modalHeaderView}>
          <Text style={styles.modalHeadingTxt}>VALJ STORLEK PA UPPDRAGEN</Text>
          <TouchableHighlight
            style={styles.modalCross}
            underlayColor={'transparent'}
            onPress={() => props?.onclose()}>
            <Text style={[styles.modalHeadingTxt, {flex: 0}]}>X</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.line, {marginVertical: 10}]} />
        <View style={styles.modalLocationRww}>
          <View style={{flex: 0.9}}>
            <Text style={styles.modalTxt}>Small</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
        </View>
        <View style={styles.modalLocationRww}>
          <View style={{flex: 0.9}}>
            <Text style={styles.modalTxt}>Medium & Large</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
        </View>
        <View style={styles.modalLocationRww}>
          <View style={{flex: 0.9}}>
            <Text style={styles.modalTxt}>X-Large</Text>
          </View>
          <View style={{flex: 0.1}}>
            <Checkbox.Android
              color={font_black}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
        </View>

        <View style={{paddingHorizontal: 30}}>
          <PrimaryButton
            label={'Visa uppdrag'}
            height={50}
            lblSize={font4}
            onClick={() => {}}
            borderRadius={30}
            backgroundColor={primary}
            fill={font_black}
            txtFamily={bold}
          />
        </View>
        <View style={{paddingHorizontal: 30, marginTop: 20}}>
          <PrimaryButton
            label={'Rensa'}
            height={50}
            brw={1}
            lblSize={font4}
            onClick={() => {}}
            borderRadius={30}
            brColor={font_black}
            backgroundColor={white}
            fill={font_black}
            txtFamily={bold}
          />
        </View>
      </View>
    );
  };
  return (
    <Overlay
      visible={props?.modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      animationType="zoomIn"
      containerStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
      childrenWrapperStyle={{backgroundColor: 'transparent'}}
      animationDuration={500}>
      {props?.option === '1' ? (
        <Location />
      ) : props?.option === '2' ? (
        <Category />
      ) : props?.option === '3' ? (
        <Size />
      ) : null}
    </Overlay>
  );
};
export default memo(Loader);