import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Animated} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 200,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Map = props => (
  <View style={styles.container}>
    <MapView.Animated
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      initialRegion={{
        latitude: parseFloat(24.8607),
        longitude: parseFloat(67.0011),
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}>
      <Marker
        coordinate={{
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      />
    </MapView.Animated>
  </View>
);

export default Map;
