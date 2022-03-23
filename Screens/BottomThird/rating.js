import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from 'react-native';
import {font_black, font_secondary, primary, secondary, secondary_light, white} from '../../Utils/colors';
import {bold, medium} from '../../Utils/fontFamily';
import {font4, font5, font6} from '../../Utils/fontSize';
import {trophy,star} from '../../Utils/images';
import StarRating from 'react-native-star-rating';
import styles from './css';

const RatingScreen = (props) => {
  const [starCount, setStarCount] = useState(0);
  const [selected, setselected] = useState(props?.selected);
  useEffect(() => {
    setselected(props?.selected)
    props?.onSelected(selected)
  }, [selected])
  return (
    <SafeAreaView>
      <View style={styles.headerUppdrag}>
        <Text style={{fontFamily: medium, fontSize: font4, color: font_black}}>
          Totalt sanittomdome
        </Text>
        <Text style={[styles.boldTxt,{textAlign:'left',fontSize: font5,}]}>
          av 0 recebsioner
        </Text>
        
        <View
          style={{
            justifyContent:'center',
            alignItems:'center'
          }}>
           <StarRating
        disabled={true}
        maxStars={5}
        starSize={40}
        starStyle={{marginRight:5}}
        rating={starCount}
        selectedStar={(rating) => setStarCount(rating)}
      />
         
        </View>
        <Text style={styles.ratingboldTxt}>0.00</Text>
        <View style={styles.headerBarcircleMain}>
          <View style={{width: 80, alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {
                 setselected(0);
              }}
              style={[styles.circle,{backgroundColor: selected == 0 ? primary : white}]}>
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
              style={[styles.circle,{backgroundColor: selected == 1 ? primary : white}]}>
              <Image style={styles.circleImg} source={star} />
            </TouchableHighlight>
            <Text style={styles.headerTxt}>omdomen</Text>
          </View>
          </View>
        
      </View>
      <ScrollView contentContainerStyle={{paddingVertical:10}}>
              <Text style={{fontFamily:medium,fontSize:font4,textAlign:'center'}}>Du har inge omdomen an</Text>
        </ScrollView>
    </SafeAreaView>
  );
};

export default RatingScreen;
