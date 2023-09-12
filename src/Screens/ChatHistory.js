import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MyStatusBar from '../component/MyStatusBar';
import MyHeader from '../component/MyHeader';
import {Colors, Fonts, Sizes} from '../assets/style';
const {width, height} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ImageBackground} from 'react-native';
const ChatHistory = props => {
  const DATA = [
    {
      id: 1,
      Name: 'First Item',
      Status: 'comlplete',
    },
    {
      id: 2,
      Name: 'First Item',
      Status: 'comlplete',
    },
    {
      id: 3,
      Name: 'First Item',
      Status: 'comlplete',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader Title="Chat History" />
      <View style={{flex: 1, marginTop: Sizes.fixPadding * 1.5}}>
        <FlatList ListHeaderComponent={<>{chatHistoryInfo()}</>} />
      </View>
    </View>
  );

  function chatHistoryInfo() {
    const renderItem = ({item}) => (
      <View
        style={{
          marginHorizontal: 15,
          backgroundColor: Colors.white,
          marginBottom: 10,
        }}>
        <View
          style={{
            borderRadius: 20,
            flex: 0,
            backgroundColor: Colors.dullWhite,
            borderRadius: 10,
            padding: 15,
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 15,
              width: width * 0.9,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '400',
                  ...Fonts.black16RobotoMedium,
                }}>
                New(Indian)
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  ...Fonts.black16RobotoMedium,
                }}>
                Order id: 123456789
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons
                name="copy-outline"
                size={26}
                color={Colors.Dark_grayish_red}
                style={{marginHorizontal: 15}}
              />
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: Colors.gray_light,
                  paddingHorizontal: Sizes.fixPadding * 1.5,
                  paddingVertical: 3,
                  // bottom: 7,
                }}>
                <Text style={{...Fonts.white14RobotoMedium}}>Open Kundli</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Name-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Gender-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Birth Date-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Birth Time-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Birth Placr-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Current Address-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Problem Area-{item.Name}
              </Text>
              <Text
                style={{
                  ...Fonts.gray14RobotoMedium,
                  marginTop: 20,
                  color: Colors.gray3,
                }}>
                Order Time-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Duration-{item.Name}
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>
                Date-{item.Name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    ...Fonts.black14InterMedium,
                  }}>
                  Status-
                </Text>
                <Text
                  style={{
                    ...Fonts.gray14RobotoMedium,
                    color:
                      item.Status == 'comlplete' ? Colors.green : Colors.red,
                  }}>
                  {item.Status}
                </Text>
              </View>
            </View>
            <View>
              <ImageBackground
                source={require('../assets/images/back.png')}
                resizeMode="contain"
                style={{
                  width: width * 0.3,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: -20,
                  position: 'absolute',
                  alignSelf: 'flex-start',
                  top: -10,
                }}>
                <Text
                  style={{
                    ...Fonts.white12RobotoMedium,
                    textAlign: 'center',
                    bottom: 6,
                  }}>
                  {' '}
                  Rs.420
                </Text>
              </ImageBackground>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: height * 0.03,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: Colors.primaryLight,
                textDecorationLine: 'underline',
              }}>
              View Chat
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: Colors.primaryLight,
                textDecorationLine: 'underline',
              }}>
              Suggest Remedy
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: Colors.primaryLight,
                textDecorationLine: 'underline',
              }}>
              Refund Amount
            </Text>
          </View>
        </View>
      </View>
    );
    return (
      <View style={{}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingVertical: 15}}
        />
      </View>
    );
  }
};

export default ChatHistory;
