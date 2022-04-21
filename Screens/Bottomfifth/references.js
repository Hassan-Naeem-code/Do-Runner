import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import CommonHeader from '../../Components/commonHeader';;
import Textinput from '../../Components/Input';
import PrimaryButton from './../../Components/primaryButton';
import { font_black, primary, secondary_light, white } from '../../Utils/colors';
import { medium } from '../../Utils/fontFamily';
import { font3, font4, font5 } from '../../Utils/fontSize';
import styles from './css';

const References = () => {
    const [activeAddReferalProjects, setActiveAddReferalProjects] = useState(false);
    const [description, setDescription] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const getprojectTitle = (val) => {
        setProjectTitle(val);
    }
    const getDescription = (val) => {
        setDescription(val);
    }
    const onActiveReferalProject = () => {
        setActiveAddReferalProjects(!activeAddReferalProjects);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader title={'References'} />
            <ScrollView
                keyboardShouldPersistTaps={'handled'}>
                <View style={{ padding: 20, marginTop: 20 }}>
                    <Text style={{ fontFamily: medium, fontSize: font4, color: font_black }}>Here you can upload photos of previously performed jobs. In this way, you increase the chances of gaining the trust of new customers. Create multiple projects for different jobs or create a project with all your reference images.</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <View style={{ flex: 0.6 }}>
                        <PrimaryButton
                            label={activeAddReferalProjects ? 'Remove Referrals Projects' : 'Add Referrals Project'}
                            height={50}
                            lblSize={font5}
                            borderRadius={30}
                            backgroundColor={primary}
                            fill={'#000'}
                            onClick={onActiveReferalProject}
                        />
                    </View>
                </View>
                {
                    activeAddReferalProjects && (
                        <View style={{ paddingHorizontal: 10, marginVertical: 25 }}>
                            <Card style={{ padding: 20 }}>
                                <Text style={{ fontFamily: medium, fontSize: font4 }}>Project</Text>
                                <Text style={{ fontFamily: medium, fontSize: font5, color: font_black }}>New Project</Text>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: font4, marginBottom: 10 }}>
                                        PROJECT TITLE
                                    </Text>
                                    <Textinput
                                        type={'normal'}
                                        height={50}
                                        txtcolor={'#000'}
                                        borderColor={'#000'}
                                        value={projectTitle}
                                        onchange={getprojectTitle}
                                    // backColor={gray}
                                    />
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: font4, marginBottom: 10 }}>
                                        DESCRIPTION
                                    </Text>
                                    <Textinput
                                        type={'normal'}
                                        height={50}
                                        txtcolor={'#000'}
                                        borderColor={'#000'}
                                        multiline={true}
                                        value={description}
                                        onchange={getDescription}
                                    // backColor={gray}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
                                    <View style={{ flex: 0.28 }}>
                                        <PrimaryButton
                                            label={'Remove'}
                                            height={50}
                                            lblSize={font5}
                                            borderRadius={30}
                                            backgroundColor={'#fff'}
                                            brColor={'#000'}
                                            brw={1}
                                            fill={'#000'}
                                        />
                                    </View>
                                    <View style={{ flex: 0.05 }}></View>
                                    <View style={{ flex: 0.25 }}>
                                        <PrimaryButton
                                            label={'Save'}
                                            height={50}
                                            lblSize={font5}
                                            borderRadius={30}
                                            backgroundColor={primary}
                                            fill={'#000'}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    )
                }
                <View style={{ paddingHorizontal: 10, marginVertical: 25 }}>
                    <Card style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: medium, fontSize: font5, color: font_black }}>New Project</Text>
                            <TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: 'rgb(245,245,245)', padding: 5, paddingHorizontal: 15, borderRadius: 25 }}>
                                <Text style={{ fontFamily: medium, fontSize: font3 }}>Exclaimed</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
                            <View style={{ flex: 0.28 }}>
                                <PrimaryButton
                                    label={'Remove'}
                                    height={40}
                                    lblSize={font5}
                                    borderRadius={30}
                                    backgroundColor={'#fff'}
                                    brColor={'#000'}
                                    brw={1}
                                    fill={'#000'}
                                />
                            </View>
                            <View style={{ flex: 0.05 }}></View>
                            <View style={{ flex: 0.25 }}>
                                <PrimaryButton
                                    label={'Edit'}
                                    height={40}
                                    lblSize={font5}
                                    borderRadius={30}
                                    backgroundColor={primary}
                                    fill={'#000'}
                                />
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default References
