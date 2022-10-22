import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-paper';
import CommonHeader from '../../Components/commonHeader';
import Textinput from '../../Components/Input';
import PrimaryButton from './../../Components/primaryButton';
import LoadingButton from './../../Components/loadingButton';
import {font_black, primary} from '../../Utils/colors';
import {medium} from '../../Utils/fontFamily';
import {font3, font4, font5} from '../../Utils/fontSize';
import {
  addReference,
  myReferences,
  deleteReference,
  updateReference,
} from '../../services/api';
import {getApi, postApi} from '../../services/apiFunction';
import Toast from 'react-native-simple-toast';

const References = ({navigation}) => {
  const loginSession = useSelector(state => state.authReducers.user);
  const [activeAddReferalProjects, setActiveAddReferalProjects] =
    useState(false);
  const [referencesData, setReferencesData] = useState([]);
  const [description, setDescription] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [deleteRefLoading, setDeleteRefLoading] = useState(0);
  const [myReferenceLoading, setMyReferenceLoading] = useState(false);
  const [myReferenceUpdation, setMyReferenceUpdation] = useState(false);
  const [prefabText, setPrefabText] = useState('');
  const [temporaryDataToUpdate, setTemporaryDataToUpdate] = useState(null);
  const getprojectTitle = val => {
    setProjectTitle(val);
  };
  const getDescription = val => {
    setDescription(val);
  };
  const onActiveReferalProject = () => {
    setActiveAddReferalProjects(!activeAddReferalProjects);
  };
  const getMyReferences = async () => {
    setMyReferenceLoading(!myReferenceLoading);
    const {success, data, message} = await getApi(
      myReferences,
      loginSession?.token,
    );
    setMyReferenceLoading(false);
    if (success) {
      setReferencesData(data);
      setPrefabText(message);
    } else {
      setPrefabText(message);
      setReferencesData([]);
    }
  };
  const deleteMyReference = async (id, index) => {
    setDeleteRefLoading(id);
    const {success, message} = await getApi(
      `${deleteReference}?reference_id=${id}`,
      loginSession?.token,
    );
    setDeleteRefLoading(0);
    if (success) {
      setReferencesData(referencesData.splice(index));
      Toast.show(message);
    } else {
      Toast.show(message);
    }
  };
  const updateMyReference = ({id, title, description}, index) => {
    setTemporaryDataToUpdate({id, index});
    setProjectTitle(title);
    setDescription(description);
    onActiveReferalProject();
  };
  const addMyCurrentReference = async () => {
    if (projectTitle == '') return Toast.show('Please Enter The Project Title');
    if (description == '')
      return Toast.show('Please Enter The Project Description');
    setMyReferenceUpdation(!myReferenceUpdation);
    let params = {title: projectTitle, description};
    const {data, success, message} = await postApi(
      addReference,
      params,
      loginSession?.token,
    );
    setMyReferenceUpdation(false);
    if (success) {
      setReferencesData([...referencesData, data]);
      onActiveReferalProject();
      setProjectTitle('');
      setDescription('');
      Toast.show(message);
      navigation.goBack();
    } else {
      Toast.show(message);
    }
  };
  const updateMyCurrentReference = async () => {
    if (projectTitle == '') return Toast.show('Please Enter The Project Title');
    if (description == '')
      return Toast.show('Please Enter The Project Description');
    setMyReferenceUpdation(!myReferenceUpdation);
    let params = {
      title: projectTitle,
      description,
      reference_id: temporaryDataToUpdate?.id,
    };
    const {data, success, message} = await postApi(
      updateReference,
      params,
      loginSession?.token,
    );
    setMyReferenceUpdation(false);
    if (success) {
      console.log('update data is', data);
      setTemporaryDataToUpdate(null);
      onActiveReferalProject();
      setProjectTitle('');
      setDescription('');
      Toast.show(message);
      navigation.goBack();
    } else {
      Toast.show(message);
    }
  };
  useEffect(() => {
    getMyReferences();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonHeader title={'References'} />
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={{padding: 20, marginTop: 20}}>
          <Text
            style={{fontFamily: medium, fontSize: font4, color: font_black}}>
            Here you can upload photos of previously performed jobs. In this
            way, you increase the chances of gaining the trust of new customers.
            Create multiple projects for different jobs or create a project with
            all your reference images.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View style={{flex: 0.6}}>
            <PrimaryButton
              label={
                activeAddReferalProjects
                  ? 'Remove Referrals Projects'
                  : 'Add Referrals Project'
              }
              height={50}
              lblSize={font5}
              borderRadius={30}
              backgroundColor={primary}
              fill={'#000'}
              onClick={onActiveReferalProject}
            />
          </View>
        </View>
        {activeAddReferalProjects && (
          <View style={{paddingHorizontal: 10, marginVertical: 25}}>
            <Card style={{padding: 20}}>
              <Text
                style={{
                  fontFamily: medium,
                  fontSize: font4,
                  color: font_black,
                }}>
                Project
              </Text>
              <Text
                style={{
                  fontFamily: medium,
                  fontSize: font5,
                  color: font_black,
                }}>
                New Project
              </Text>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontSize: font4,
                    marginBottom: 10,
                    color: font_black,
                  }}>
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
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontSize: font4,
                    marginBottom: 10,
                    color: font_black,
                  }}>
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 20,
                }}>
                {temporaryDataToUpdate && temporaryDataToUpdate !== null && (
                  <View style={{flex: 0.28}}>
                    {deleteRefLoading == temporaryDataToUpdate?.id ? (
                      <LoadingButton
                        height={50}
                        lblSize={font5}
                        borderRadius={30}
                        backgroundColor={'yellow'}
                        fill={'#000'}
                      />
                    ) : (
                      <PrimaryButton
                        label={'Remove'}
                        height={50}
                        lblSize={font5}
                        borderRadius={30}
                        backgroundColor={'#fff'}
                        brColor={'#000'}
                        brw={1}
                        fill={'#000'}
                        onClick={() =>
                          deleteMyReference(
                            temporaryDataToUpdate?.id,
                            temporaryDataToUpdate?.index,
                          )
                        }
                      />
                    )}
                  </View>
                )}
                <View style={{flex: 0.05}}></View>
                <View style={{flex: 0.25}}>
                  {myReferenceUpdation ? (
                    <LoadingButton
                      height={50}
                      lblSize={font5}
                      borderRadius={30}
                      backgroundColor={'yellow'}
                      fill={'#000'}
                    />
                  ) : (
                    <PrimaryButton
                      label={
                        temporaryDataToUpdate && temporaryDataToUpdate !== null
                          ? 'Update'
                          : 'Save'
                      }
                      height={50}
                      lblSize={font5}
                      borderRadius={30}
                      backgroundColor={primary}
                      fill={'#000'}
                      onClick={() =>
                        temporaryDataToUpdate && temporaryDataToUpdate !== null
                          ? updateMyCurrentReference()
                          : addMyCurrentReference()
                      }
                    />
                  )}
                </View>
              </View>
            </Card>
          </View>
        )}
        {referencesData.length > 0 ? (
          referencesData.map((item, index) => {
            return (
              <>
                {item?.user && item?.user?.id === loginSession?.id && (
                  <View
                    style={{paddingHorizontal: 5, marginVertical: 10}}
                    key={index}>
                    <Card style={{paddingVertical: 20, paddingHorizontal: 10}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flex: 0.73}}>
                          <Text
                            style={{
                              fontFamily: medium,
                              fontSize: font5,
                              color: font_black,
                            }}
                            numberOfLines={2}>
                            {item?.title}
                          </Text>
                        </View>
                        <View style={{flex: 0.27}}>
                          <TouchableOpacity
                            activeOpacity={0.9}
                            style={{
                              backgroundColor: 'rgb(245,245,245)',
                              padding: 5,
                              paddingHorizontal: 15,
                              borderRadius: 25,
                            }}>
                            <Text
                              style={{
                                fontFamily: medium,
                                fontSize: font3,
                                color: font_black,
                              }}>
                              Exclaimed
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          marginTop: 20,
                        }}>
                        <View style={{flex: 0.28}}>
                          {deleteRefLoading == item?.id ? (
                            <LoadingButton
                              height={50}
                              lblSize={font5}
                              borderRadius={30}
                              backgroundColor={'yellow'}
                              fill={'#000'}
                            />
                          ) : (
                            <PrimaryButton
                              label={'Remove'}
                              height={40}
                              lblSize={font5}
                              borderRadius={30}
                              backgroundColor={'#fff'}
                              brColor={'#000'}
                              brw={1}
                              fill={'#000'}
                              onClick={() => deleteMyReference(item?.id, index)}
                            />
                          )}
                        </View>
                        <View style={{flex: 0.05}}></View>
                        <View style={{flex: 0.25}}>
                          <PrimaryButton
                            label={'Edit'}
                            height={40}
                            lblSize={font5}
                            borderRadius={30}
                            backgroundColor={primary}
                            fill={'#000'}
                            onClick={() => updateMyReference(item, index)}
                          />
                        </View>
                      </View>
                    </Card>
                  </View>
                )}
              </>
            );
          })
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '20%',
            }}>
            {myReferenceLoading ? (
              <ActivityIndicator
                size="large"
                color={'#000'}
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              />
            ) : (
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                }}>
                {prefabText}
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default References;
