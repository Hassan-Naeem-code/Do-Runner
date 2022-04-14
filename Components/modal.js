import React, { memo } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import styles from '../Screens/Home/css';
import { RadioButton } from 'react-native-paper';

const CustomModal = ({ onclose, modalVisible, allCities, city_id, setCityId, setCityName }) => {
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
            childrenWrapperStyle={{ backgroundColor: 'transparent' }}
            animationDuration={500}>
            <View style={styles.modalView}>
                <View style={styles.modalHeaderView}>
                    <Text style={styles.modalHeadingTxt}>Välj Städer</Text>
                    <TouchableHighlight
                        style={styles.modalCross}
                        underlayColor={'transparent'}
                        onPress={() => onclose()}>
                        <Text style={[styles.modalHeadingTxt, { flex: 0 }]}>X</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.line, { marginVertical: 10 }]} />
                <ScrollView>
                    {
                        allCities.map((city, index) => {
                            return (
                                <View style={styles.modalLocationRww} key={index}>
                                    <View style={{ flex: 0.9 }}>
                                        <Text style={styles.modalTxt}>{city?.name}</Text>
                                    </View>
                                    <View style={{ flex: 0.1 }}>
                                        <RadioButton.Android
                                            color="#000"
                                            uncheckedColor="#000"
                                            status={city_id === city?.id ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                setCityId(city?.id), setCityName(city?.name)
                                            }}
                                            value={city_id}
                                        />
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </Overlay>
    );
}

export default memo(CustomModal);