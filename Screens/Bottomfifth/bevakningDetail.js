import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Animated,
} from 'react-native';
import CommonHeader from '../../Components/commonHeader';
import {font_black, font_secondary, white} from '../../Utils/colors';
import {bold, medium} from '../../Utils/fontFamily';
import {font4, font5} from '../../Utils/fontSize';
import styles from './css';
import {TabView, SceneMap} from 'react-native-tab-view';
import Installning from './components/installning';
import Omraden from './components/omraden';
import Kategorier from './components/kategorier';
import Storlek from './components/storlek';

const BevakningDetail = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'installning', title: 'Installning'},
    {key: 'omraden', title: 'Omraden'},
    {key: 'kategorier', title: 'Kategorier'},
    {key: 'storlek', title: 'Storlek'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'installning':
        if (index == 0) {
          return <Installning key={route.key} />;
        }
      case 'omraden':
        if (index == 1) {
          return <Omraden key={route.key} />;
        }
      case 'kategorier':
        if (index == 2) {
          return <Kategorier key={route.key} />;
        }
      case 'storlek':
        if (index == 3) {
          return <Storlek key={route.key} />;
        }
    }
  };
  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 1,
            ),
          });
          return (
            <TouchableHighlight
              underlayColor={'transparent'}
              style={[
                styles.tabItem,
                {
                  //   backgroundColor:
                  //     props.navigationState.index == i ? white : white,
                  borderBottomWidth: props.navigationState.index == i ? 2 : 0,
                },
              ]}
              onPress={() => setIndex(i)}>
              <Animated.Text
                style={{
                  opacity,
                  color:
                    props.navigationState.index == i
                      ? font_black
                      : font_secondary,
                  fontSize: font5,
                  fontFamily: props.navigationState.index == i ? bold : medium,
                }}>
                {route.title}
              </Animated.Text>
            </TouchableHighlight>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={props?.route?.params?.from === 'Redigera' ?'Bevakning' : 'Ny bevakningsprofil'} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
};

export default BevakningDetail;
