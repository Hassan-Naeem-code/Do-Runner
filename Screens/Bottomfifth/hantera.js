import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import CommonHeader from '../../Components/commonHeader';
import {
  font_black,
  secondary,
  secondary_light,
  white,
} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font4} from '../../Utils/fontSize';
import {back_arrow} from '../../Utils/images';
import {Switch} from 'react-native-paper';
import styles from './css';
const Hantera = props => {
  const [uppdrag, setUppdrag] = useState(false);
  const [offerter, setOfferter] = useState(false);
  const [meddalanden, setMeddalanden] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.hanteraHeaderMain}>
          <View style={styles.hanteraHeaderSubMain}>
            <TouchableHighlight
              style={{
                alignItems: 'center',
                padding: 5,
              }}
              underlayColor={secondary_light}
              onPress={() => props?.navigation.goBack()}>
              <Image style={{width: 20, height: 20}} source={back_arrow} />
            </TouchableHighlight>
            <View
              style={{
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={styles.hanteraHeaderTxt}>Hantera aviseringar</Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: white, padding: 20,flex:0.7}}>
          <View style={styles.hanteraRow}>
            <View style={{flex: 0.8}}>
              <Text style={styles.hanteraTitle}>Uppdrag</Text>
              <Text style={styles.hanteraDesc}>
                Fa en avisering nar ett uppdrag som matcher din valda bevakning
                innkommer
              </Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'flex-end'}}>
              <Switch
                value={uppdrag}
                onValueChange={() => setUppdrag(!uppdrag)}
                color="#000"
              />
            </View>
          </View>
          <View style={styles.hanteraRow}>
            <View style={{flex: 0.8}}>
              <Text style={styles.hanteraTitle}>Offerter & Avtal </Text>
              <Text style={styles.hanteraDesc}>
                Fa en avisering nar ett uppdrag som matcher din valda bevakning
                avtal
              </Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'flex-end'}}>
              <Switch
                value={offerter}
                onValueChange={() => setOfferter(!offerter)}
                color="#000"
              />
            </View>

          </View>
          <View style={styles.hanteraRow}>
            <View style={{flex: 0.8}}>
              <Text style={styles.hanteraTitle}>Meddalanden</Text>
              <Text style={styles.hanteraDesc}>
                Fa en avisering nar ett uppdrag som matcher din valda bevakning
                innkommer
              </Text>
            </View>
            <View style={{flex: 0.2, alignItems: 'flex-end'}}>
              <Switch
                value={meddalanden}
                onValueChange={() => setMeddalanden(!meddalanden)}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hantera;
