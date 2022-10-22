import React, {memo} from 'react';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';
import Textinput from './Input';
import LoadingButton from './loadingButton';
import PrimaryButton from './primaryButton';
import Overlay from 'react-native-modal-overlay';
import {font4, font5} from '../Utils/fontSize';
import {primary, font_black} from '../Utils/colors';
import styles from '../Screens/Home/css';

const CardModal = ({
  onclose,
  modalVisible,
  cardHolderName,
  setCardHolderName,
  cardHolderAddress,
  setCardHolderAddress,
  cardHolderZipCode,
  setCardHolderZipCode,
  cardHolderPostOffice,
  setCardHolderPostOffice,
  cardHolderEmailAddress,
  setCardHolderEmailAddress,
  cardHolderCardNumber,
  setCardHolderCardNumber,
  cardHolderCardCvc,
  setCardHolderCardCvc,
  cardHolderCardExpiryMonth,
  setCardHolderCardExpiryMonth,
  cardHolderCardExpiryYear,
  setCardHolderCardExpiryYear,
  active,
  submitCardDetails,
}) => {
  return (
    <Overlay
      visible={modalVisible}
      onClose={() => {
        onclose();
      }}
      animationType="zoomIn"
      containerStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
      childrenWrapperStyle={{backgroundColor: 'transparent'}}
      animationDuration={500}>
      <View style={[styles.modalView, {padding: 15}]}>
        <View style={styles.modalHeaderView}>
          <Text style={styles.modalHeadingTxt}>Add New Card</Text>
          <TouchableHighlight
            style={styles.modalCross}
            underlayColor={'transparent'}
            onPress={() => onclose()}>
            <Text style={[styles.modalHeadingTxt, {flex: 0}]}>X</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.line, {marginVertical: 5}]} />
        <ScrollView>
          <View style={{marginVertical: 5}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              CARDHOLDER NAME *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={'CARDHOLDER NAME *'}
              borderRadius={10}
              height={50}
              txtcolor={'#000'}
              borderColor={'#000'}
              value={cardHolderName}
              onchange={setCardHolderName}
              // backColor={gray}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              ADDRESS *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={'ADDRESS *'}
              borderRadius={10}
              height={50}
              txtcolor={'#000'}
              borderColor={'#000'}
              value={cardHolderAddress}
              onchange={setCardHolderAddress}
              // backColor={gray}
            />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <View style={{flex: 0.45}}>
              <Text
                style={{fontSize: font4, marginBottom: 10, color: font_black}}>
                ZIP CODE *
              </Text>
              <Textinput
                type={'normal'}
                placeholder={'ZIP CODE *'}
                borderRadius={10}
                height={50}
                txtcolor={'#000'}
                borderColor={'#000'}
                value={cardHolderZipCode}
                onchange={setCardHolderZipCode}
                // backColor={gray}
              />
            </View>
            <View style={{flex: 0.1}}></View>
            <View style={{flex: 0.45}}>
              <Text
                style={{fontSize: font4, marginBottom: 10, color: font_black}}>
                POST OFFICE *
              </Text>
              <Textinput
                type={'normal'}
                placeholder={'POST OFFICE *'}
                borderRadius={10}
                height={50}
                txtcolor={'#000'}
                borderColor={'#000'}
                value={cardHolderPostOffice}
                onchange={setCardHolderPostOffice}
                // backColor={gray}
              />
            </View>
          </View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              EMAIL *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={'EMAIL *'}
              borderRadius={10}
              height={50}
              txtcolor={'#000'}
              borderColor={'#000'}
              value={cardHolderEmailAddress}
              onchange={setCardHolderEmailAddress}
              // backColor={gray}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              CARD NUMBER *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={'CARD NUMBER *'}
              borderRadius={10}
              height={50}
              txtcolor={'#000'}
              borderColor={'#000'}
              value={cardHolderCardNumber}
              onchange={setCardHolderCardNumber}
              // backColor={gray}
            />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <View style={{flex: 0.45}}>
              <Text
                style={{fontSize: font4, marginBottom: 10, color: font_black}}>
                VALIDITY MONTH *
              </Text>
              <Textinput
                type={'normal'}
                placeholder={'VALIDITY MONTH *'}
                borderRadius={10}
                height={50}
                txtcolor={'#000'}
                borderColor={'#000'}
                value={cardHolderCardExpiryMonth}
                onchange={setCardHolderCardExpiryMonth}
                // backColor={gray}
              />
            </View>
            <View style={{flex: 0.1}}></View>
            <View style={{flex: 0.45}}>
              <Text
                style={{fontSize: font4, marginBottom: 10, color: font_black}}>
                VALIDITY YEAR *
              </Text>
              <Textinput
                type={'normal'}
                placeholder={'VALIDITY YEAR *'}
                borderRadius={10}
                height={50}
                txtcolor={'#000'}
                borderColor={'#000'}
                value={cardHolderCardExpiryYear}
                onchange={setCardHolderCardExpiryYear}
                // backColor={gray}
              />
            </View>
          </View>
          <View style={{marginVertical: 5}}>
            <Text
              style={{fontSize: font4, marginBottom: 10, color: font_black}}>
              CVC *
            </Text>
            <Textinput
              type={'normal'}
              placeholder={'CVC *'}
              borderRadius={10}
              height={50}
              txtcolor={'#000'}
              borderColor={'#000'}
              value={cardHolderCardCvc}
              onchange={setCardHolderCardCvc}
              // backColor={gray}
            />
          </View>
          <View style={{paddingHorizontal: 20, marginVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <View style={{flex: 0.8}}>
                {active ? (
                  <LoadingButton
                    height={50}
                    lblSize={font5}
                    borderRadius={30}
                    backgroundColor={'yellow'}
                    fill={'#000'}
                  />
                ) : (
                  <PrimaryButton
                    label={'Add Credit Card'}
                    height={50}
                    lblSize={font5}
                    borderRadius={30}
                    backgroundColor={primary}
                    fill={'#000'}
                    onClick={e => submitCardDetails(e)}
                  />
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Overlay>
  );
};

export default memo(CardModal);
