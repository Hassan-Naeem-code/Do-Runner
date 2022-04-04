import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import PrimaryButton from '../../Components/primaryButton';
import {
  font_black,
  font_secondary,
  primary,
  secondary,
  white,
} from '../../Utils/colors';
import {bold, medium, regular} from '../../Utils/fontFamily';
import {font4, font5, font6, font7, font8} from '../../Utils/fontSize';

import {
  waving_hand,
  diagonal_arrow,
  eye,
  heart,
  location,
  percentage,
  size,
  hammer,
  dollar_bag,
  calendar,
  user,
} from '../../Utils/images';
import Card from './components/card';
import Modal from './components/modal';
import styles from './css';
import {getAllPosts} from '../../services/api';
import {getApi} from '../../services/apiFunction';

let arr = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];
const Home = () => {
  const [option, setOption] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterBool, setfilterBool] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const loginSession = useSelector(state => state.authReducers.user);
  const renderItem = ({item}) => <Card item={item} />;
  console.log('loginSession', loginSession);
  const getPosts = async () => {
    const result = await getApi(getAllPosts, loginSession?.token);
    console.log('result of post api', result);
    if (result && result.data.length > 0) {
      setAllPosts(result.data);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      <Modal
        option={option}
        modalVisible={modalVisible}
        onclose={() => setModalVisible(false)}
      />
      <View style={{padding: 20, backgroundColor: secondary}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontFamily: medium, fontSize: font5}}>Hej</Text>
          <Image
            style={{width: 20, height: 20, marginLeft: 10}}
            source={waving_hand}
          />
        </View>
        <Text style={{marginTop: 10, fontFamily: medium, fontSize: font8}}>
          {loginSession?.name}
        </Text>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{marginTop: 15}}>
          <View style={{width: 80, alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {
                setModalVisible(!modalVisible), setOption('1');
              }}
              style={[styles.circle]}>
              <Image style={styles.circleImg} source={location} />
            </TouchableHighlight>
            <Text style={styles.headerTxt}>Bevakning</Text>
          </View>
          <View style={{width: 80, alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {
                setModalVisible(!modalVisible), setOption('2');
              }}
              style={styles.circle}>
              <Image style={styles.circleImg} source={diagonal_arrow} />
            </TouchableHighlight>
            <Text style={styles.headerTxt}>Utoka bevakning</Text>
          </View>
          <View style={{width: 80, alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {
                setModalVisible(!modalVisible), setOption('3');
              }}
              style={styles.circle}>
              <Image style={styles.circleImg} source={size} />
            </TouchableHighlight>
            <Text style={styles.headerTxt}>S-XL</Text>
          </View>
          <View style={{width: 80, alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {
                setOption('4'),
                  setfilterBool(option === '4' && filterBool ? false : true);
              }}
              style={[
                styles.circle,
                {
                  backgroundColor:
                    option === '4' && filterBool ? primary : white,
                },
              ]}>
              <Image style={styles.circleImg} source={percentage} />
            </TouchableHighlight>
            <Text style={styles.headerTxt}>Okopta uppdrag</Text>
          </View>
          <View style={{width: 80, alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {
                setOption('5'),
                  setfilterBool(option === '5' && filterBool ? false : true);
              }}
              style={[
                styles.circle,
                {
                  backgroundColor:
                    option === '5' && filterBool ? primary : white,
                },
              ]}>
              <Image style={styles.circleImg} source={heart} />
            </TouchableHighlight>
            <Text style={styles.headerTxt}>Favoriter</Text>
          </View>

          <View style={{width: 80, alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => {
                setOption('6'),
                  setfilterBool(option === '6' && filterBool ? false : true);
              }}
              style={[
                styles.circle,
                {
                  backgroundColor:
                    option === '6' && filterBool ? primary : white,
                },
              ]}>
              <Image style={styles.circleImg} source={eye} />
            </TouchableHighlight>
            <Text style={styles.headerTxt}>Dolda uppdrag</Text>
          </View>
        </ScrollView>
        {filterBool ? (
          <View
            style={{
              marginTop: 15,
              alignItems: 'flex-start',
            }}>
            <TouchableHighlight
              underlayColor={font_secondary}
              onPress={() => setfilterBool(!filterBool)}
              style={styles.filterView}>
              <>
                <Text style={styles.filterTxt}>Rensa alla filter</Text>
                <Text style={[styles.filterTxt, {marginLeft: 10}]}>X</Text>
              </>
            </TouchableHighlight>
          </View>
        ) : null}
      </View>

      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text style={{padding: 20, fontFamily: regular, fontSize: font5}}>
              {allPosts?.length} UPPDRAG
            </Text>
          )}
          data={allPosts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
