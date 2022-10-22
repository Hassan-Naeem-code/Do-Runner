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

import {waving_hand} from '../../Utils/images';
import Card from './components/card';
import Modal from './components/modal';
import styles from './css';
import {getAllPosts, getAllServices} from '../../services/api';
import {getApi} from '../../services/apiFunction';

const Home = () => {
  const [option, setOption] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterBool, setfilterBool] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const loginSession = useSelector(state => state.authReducers.user);
  // Function to display Card
  const renderItem = ({item}) => <Card item={item} />;
  // Function to get the POST to view
  const getPosts = async () => {
    const result = await getApi(getAllPosts, loginSession?.token);
    console.log('result of post api', result);
    if (result && result.data.length > 0) {
      setAllPosts(result.data);
    }
  };
  // Function to get the SERVICES to view
  const getServices = async () => {
    const result = await getApi(getAllServices, loginSession?.token);
    console.log('result of service api', result);
    if (result && result.data.length > 0) {
      setAllServices(result.data);
    }
  };
  // Function Run when the screen is viewed
  useEffect(() => {
    getPosts();
    getServices();
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
          <Text
            style={{fontFamily: medium, fontSize: font5, color: font_black}}>
            Hej
          </Text>
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
          {allServices.length > 0
            ? allServices.map((item, index) => {
                return (
                  <View style={{width: 80, alignItems: 'center'}} key={index}>
                    <TouchableHighlight
                      underlayColor={font_secondary}
                      onPress={() => {
                        setModalVisible(!modalVisible), setOption('1');
                      }}
                      style={[styles.circle]}>
                      <Image
                        style={styles.circleImg}
                        source={{uri: item?.image}}
                      />
                    </TouchableHighlight>
                    <Text style={styles.headerTxt}>{item?.title}</Text>
                  </View>
                );
              })
            : null}
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
            <Text
              style={{
                padding: 20,
                fontFamily: regular,
                fontSize: font5,
                color: font_black,
              }}>
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
