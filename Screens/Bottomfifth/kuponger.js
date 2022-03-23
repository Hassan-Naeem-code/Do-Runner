import React from 'react'
import { View, Text,SafeAreaView,ScrollView,Image, TouchableHighlight } from 'react-native'
import CommonHeader from '../../Components/commonHeader'
import { font_black, font_secondary, primary, white } from '../../Utils/colors'
import { medium, regular } from '../../Utils/fontFamily'
import { font4, font5, font6, font8 } from '../../Utils/fontSize'
import { couponse,copyIcon,email,facebook } from '../../Utils/images'

import styles from './css'
const Kuponger = () => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:white}}>
            <CommonHeader title={'Bjud in & tjana jobb'}/>
            
            <ScrollView showsVerticalScrollIndicator={false} >
            
            <Image style={{width:'100%'}} source={couponse}/>
            <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:100}}>
                <Text style={{fontSize:font8,fontFamily:regular,color:font_black,textAlign:'center',marginTop:5}}>Bjud in dina branschkollegor, fa 5 kuponger</Text>
            </View>
            <View style={{padding:20}}>
            <View style={{flexDirection:'row',marginTop:15}}>
                <View style={styles.kupongerCircle}>
                    <Text style={styles.circleTxt}>1</Text>
                </View>
                <View style={{flex:0.9,marginLeft:10}}>
                <Text style={styles.circleViewTxt}>DIn kollega far 5 kuponger nar de registrear sig med din varningslank</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:15}}>
                <View style={styles.kupongerCircle}>
                    <Text style={styles.circleTxt}>2</Text>
                </View>
                <View style={{flex:0.9,marginLeft:10}}>
                <Text style={styles.circleViewTxt}>DIn kollega far 5 kuponger nar de registrear sig med din varningslank</Text>
                </View>
            </View>

            <Text style={{textAlign:'center',color:font_black,fontSize:font5,fontFamily:regular,marginVertical:15}}>Win win!</Text>

            <View style={{borderWidth:1,borderRadius:20,borderColor:font_secondary}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   
                <Text style={{fontFamily:regular,fontSize:font4,color:font_secondary,flex:0.9,paddingHorizontal:10}}>https://gogole.com</Text>
                <TouchableHighlight style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:primary,borderRadius:20,padding:5}}>
                    <Image style={{width:16,height:16}} source={copyIcon}/>
                    </View>
                </TouchableHighlight>
                </View>
                
            </View>
            <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:font4,color:font_black,fontFamily:medium}}>Dela din varvningslank</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
            <Image style={{width:25,height:25}} source={facebook}/>
            <Image style={{width:25,height:25,marginLeft:20,}} source={email}/>
            </View>
            </View>
            </View>
            </ScrollView>
           
        </SafeAreaView>
    )
}

export default Kuponger
