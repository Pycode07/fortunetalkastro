import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Sizes, Colors, Fonts} from '../assets/style';
import MyStatusBar from '../component/MyStatusBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('screen');
const AcceptChat = () => {
  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{
          //   flex: 1,

          borderRadius: Sizes.fixPadding,
        }}>
        <ImageBackground
          source={require('../assets/images/ChatBackground.png')}
          resizeMode="cover"
          style={{height: height}}>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 0.3,

                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('../assets/images/usrImg.png')}
                style={{
                  width: 180,
                  height: 180,
                  //   alignSelf: 'flex-end',
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 0.3,
                alignItems: 'center',
                marginHorizontal: Sizes.fixPadding,
              }}>
              <Text
                style={{
                  ...Fonts.white18RobotBold,
                  fontSize: 24,
                  fontWeight: '600',
                  marginVertical: Sizes.fixPadding,
                }}>
                Suman
              </Text>
              <Text
                style={{
                  ...Fonts.white18RobotMedium,
                  color: Colors.dullWhite,

                  marginVertical: Sizes.fixPadding * 2.0,
                }}>
                Please accept call request
              </Text>
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  width: height * 0.1,
                  height: height * 0.1,
                  // position: 'absolute',
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  ...Fonts.while22RighteousRegular,

                  fontWeight: '600',
                }}>
                FortuneTalk
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,

                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  //   width: '40%',
                  backgroundColor: Colors.lightGreen,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  padding: Sizes.fixPadding + 5,
                  borderRadius: 40,
                  paddingHorizontal: Sizes.fixPadding * 4.5,
                  alignSelf: 'center',
                }}>
                <Ionicons
                  name="chatbubble-ellipses"
                  size={32}
                  color={Colors.white}
                  //   style={{marginHorizontal: Sizes.fixPadding}}
                />

                <Text
                  style={{
                    ...Fonts.white18RobotMedium,
                    fontSize: 24,
                    marginHorizontal: Sizes.fixPadding - 5,
                    textAlign: 'center',
                  }}>
                  Start Chat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  //   width: '40%',
                  backgroundColor: Colors.red,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  padding: Sizes.fixPadding - 2,
                  borderRadius: 40,
                  //   paddingHorizontal: Sizes.fixPadding * 2.5,
                }}>
                <Entypo name="cross" size={30} color={Colors.white} />

                <Text
                  style={{
                    ...Fonts.white18RobotMedium,
                    fontSize: 22,
                    marginHorizontal: Sizes.fixPadding - 5,
                    textAlign: 'center',
                  }}>
                  Reject Chat
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default AcceptChat;
