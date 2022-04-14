import React, { memo } from 'react';
import {
  Text,
  TouchableHighlight,
  TextInput,
  View,
  StyleSheet,
  Image,
  I18nManager,
} from 'react-native';
import { brown, white, blue, fontGray } from '../Utils/colors';
// import {password_eye} from '../Utils/images';
// "#f5e6fd",
// "#fbe6e2",
// "#fff9dd",
// "#e3f8fa",

// #15A09D
const Textinput = ({
  onchange,
  value,
  placeholder,
  secureTextEntry,
  keyboardtype,
  onclickEye,
  eye,
  type,
  borderRadius,
  backColor,
  height,
  txtcolor,
  borderColor,
  id_editable
}) => {
  return (
    <>
      {type == 'normal' ? (
        <TextInput
          style={[
            styles.input,
            {
              borderWidth: 1,
              padding: 10,
              height: height ? height : 50,
              borderRadius: borderRadius ? borderRadius : null,
              backgroundColor: backColor ? backColor : null,
              borderColor: borderColor ? borderColor : white,
              color: txtcolor ? txtcolor : null,
            },
          ]}
          onChangeText={val => onchange(val)}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#C7C7CD'}
          keyboardType={keyboardtype}
          secureTextEntry={secureTextEntry}
          editable={id_editable ? false : true}
        />
      ) : // <View style={styles.pass}>
        //   <TextInput
        //     style={[styles.input, {marginHorizontal: '2.5%', width: '86%'}]}
        //     onChangeText={onchange}
        //     value={value}
        //     placeholder={placeholder}
        //     placeholderTextColor={'#C7C7CD'}
        //     keyboardType={keyboardtype}
        //     secureTextEntry={secureTextEntry}
        //   />
        //   <TouchableHighlight
        //     underlayColor="transparant"
        //     onPress={() => onclickEye(eye)}>
        //     <Image
        //       style={{right: 10, tintColor: !eye ? blue : fontGray}}
        //       source={password_eye}
        //     />
        //   </TouchableHighlight>
        // </View>
        null}
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
  },
  pass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
    borderWidth: 0.5,
  },
});
export default memo(Textinput);
