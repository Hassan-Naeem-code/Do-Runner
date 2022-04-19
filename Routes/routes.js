import * as React from 'react';
import { Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect, useDispatch, useSelector } from 'react-redux';

//AUTH
import SelectAuth from '../Screens/Auth/selectAuth';
import Login from '../Screens/Auth/login';
import Register from '../Screens/Auth/register';
import RegisterCompany from '../Screens/Auth/registerCompany';

//HOME
import Home from '../Screens/Home/home';
import Detail from '../Screens/Home/detail';

//UPPDRAG
import BottomThird from '../Screens/BottomThird/uppdrag'

// MER
import Bottomfifth from '../Screens/Bottomfifth/bottomfifth'
import AndraProfile from '../Screens/Bottomfifth/andraProfile';
import Kampanjer from '../Screens/Bottomfifth/kampanjer';
import Kontakta from '../Screens/Bottomfifth//kontakta';
import Balance from '../Screens/Bottomfifth//Balance';
import Hantera from '../Screens/Bottomfifth/hantera';
import Kuponger from '../Screens/Bottomfifth/kuponger';
import Formaner from '../Screens/Bottomfifth/formaner';
import Offerter from '../Screens/Bottomfifth/offerter';
import Bevakning from '../Screens/Bottomfifth/bevakning';
import BevakningDetail from '../Screens/Bottomfifth/bevakningDetail';




// IMAGES
import { dots, home, messenger, shopping_bag, trophy } from '../Utils/images';
import { primary, font_secondary, white } from '../Utils/colors';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      animation="fade"
      initialRouteName="SelectAuth">
      <Stack.Screen
        name="SelectAuth"
        options={{ headerShown: false }}
        component={SelectAuth}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={Register}
      />
      <Stack.Screen
        name="RegisterCompany"
        options={{ headerShown: false }}
        component={RegisterCompany}
      />
    </Stack.Navigator>
  );
};

const RootMartStackScreen = ({ navigation }) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        headerMode="float"
        animation="fade"
        initialRouteName="ExploreBottom">
        <Stack.Screen
          name="ExploreBottom"
          options={{ headerShown: false }}
          component={BottomTab}
        />
        <Stack.Screen
          name="HomeDetail"
          options={{ headerShown: false }}
          component={Detail}
        />

      </Stack.Navigator>
    </>
  );
};

const BottomTab = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="BottomThird"
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: font_secondary,
        style: {
          backgroundColor: white,
        },
        labelStyle: {
          textAlign: 'center',
        },
      }}>
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Uppdrag',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 30, height: 30, tintColor: color }}
              source={home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kandura"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Kopta',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 30, height: 30, tintColor: color }}
              source={shopping_bag}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BottomThird"
        component={BottomThird}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Vunna',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 25, height: 25, tintColor: color }}
              source={trophy}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Measurement"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Chatt',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 25, height: 25, tintColor: color }}
              source={messenger}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bottomfifth"
        component={BottomFifth}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Met',
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 24, height: 24, tintColor: color }}
              source={dots}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomFifth = ({ navigation }) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        headerMode="float"
        animation="fade"
        initialRouteName="Bottomfifth">
        <Stack.Screen
          name="Bottomfifth"
          options={{ headerShown: false }}
          component={Bottomfifth}
        />
        <Stack.Screen
          name="AndraProfile"
          options={{ headerShown: false }}
          component={AndraProfile}
        />
        <Stack.Screen
          name="Kampanjer"
          options={{ headerShown: false }}
          component={Kampanjer}
        />
        <Stack.Screen
          name="Kontakta"
          options={{ headerShown: false }}
          component={Kontakta}
        />
        <Stack.Screen
          name="Balance"
          options={{ headerShown: false }}
          component={Balance}
        />
        <Stack.Screen
          name="Hantera"
          options={{ headerShown: false }}
          component={Hantera}
        />
        <Stack.Screen
          name="Kuponger"
          options={{ headerShown: false }}
          component={Kuponger}
        />
        <Stack.Screen
          name="Formaner"
          options={{ headerShown: false }}
          component={Formaner}
        />
        <Stack.Screen
          name="Offerter"
          options={{ headerShown: false }}
          component={Offerter}
        />
        <Stack.Screen
          name="Bevakning"
          options={{ headerShown: false }}
          component={Bevakning}
        />
        <Stack.Screen
          name="BevakningDetail"
          options={{ headerShown: false }}
          component={BevakningDetail}
        />

      </Stack.Navigator>
    </>
  );
};


const routes = props => {
  const loginSession = useSelector(state => state.authReducers.loginSession);
  return (
    <>
      <NavigationContainer>
        {loginSession != null ? <RootMartStackScreen /> : <Auth />}
      </NavigationContainer>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.authReducers.user,
//     loginSession: state.authReducers.loginSession,
//     loading: state.authReducers.loading,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateUser: (user) => dispatch(updateUser(user)),
//     sessionLogin: (loginSession) => dispatch(sessionLogin(loginSession)),
//     Loader: (loading) => dispatch(Loader(loading)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(routes);
export default connect(null, null)(routes);
