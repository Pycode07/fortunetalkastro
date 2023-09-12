import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {createRef, useState} from 'react';
// import MyStatusBar from '../components/MyStatusBar';
import {Colors, Fonts, Sizes} from '../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import CountryPicker from 'react-native-country-picker-modal';
import {Divider, Input} from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyStatusBar from '../component/MyStatusBar';
const {width, height} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const [state, setState] = useState({
    callingCode: '91',
    cca2: 'IN',
  });

  const updateState = data => setState({...state, ...data});

  const {callingCode, cca2} = state;

  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{flex: 1}}>
        {/* {skipInfo()} */}
        {imageInfo()}
        <View style={styles.bottomContainer}>
          <View style={{flex: 1, marginTop: height * 0.04}}>
            {topTitleInfo()}
            {emailInput()}
            {passwordInput()}
            {termsPrivacyInfo()}
            {submiteButtonInfo()}
            {/* {orContinueInfo()} */}
            {/* {socialLoginInfo()} */}
          </View>
          {bottomViewInfo()}
        </View>
      </LinearGradient>
    </View>
  );

  function bottomViewInfo() {
    return (
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginBottom: Sizes.fixPadding * 3.0,
        }}>
        <View style={{flex: 0.3, alignItems: 'center'}}>
          <Image
            source={require('../assets/icon/Pure.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{...Fonts.grayLightRobotoRegular, textAlign: 'center'}}>
            100%{'\n'}Safety Surety
          </Text>
        </View>
        <Divider orientation="vertical" />
        <View style={{flex: 0.3, alignItems: 'center'}}>
          <Image
            source={require('../assets/icon/private.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{...Fonts.grayLightRobotoRegular, textAlign: 'center'}}>
            100%{'\n'}Private
          </Text>
        </View>
      </View>
    );
  }

  function submiteButtonInfo() {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('home')}
        style={{
          width: '70%',
          marginVertical: Sizes.fixPadding * 2,
          alignSelf: 'center',
        }}>
        <LinearGradient
          colors={[Colors.primaryLight, Colors.primaryDark]}
          style={{
            width: '100%',
            paddingVertical: Sizes.fixPadding,
            borderRadius: Sizes.fixPadding * 1.5,
          }}>
          <Text style={{...Fonts.white18RobotBold, textAlign: 'center'}}>
            Sign in
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function termsPrivacyInfo() {
    return (
      <Text
        style={{
          ...Fonts.gray14RobotoMedium,
          textAlign: 'right',
          right: width * 0.1,
          marginVertical: Sizes.fixPadding,
        }}>
        Forgot password
      </Text>
    );
  }

  function emailInput() {
    const emailinputRef = createRef();
    return (
      <Input
        ref={emailinputRef}
        placeholder="Email ID"
        maxLength={10}
        // containerStyle={{height: 80}}
        inputContainerStyle={[
          styles.inputContainer,
          {marginTop: Sizes.fixPadding * 2},
        ]}
        inputStyle={{...Fonts.black16RobotoRegular}}
      />
    );
  }

  function passwordInput() {
    const passinputRef = createRef();
    return (
      <Input
        ref={passinputRef}
        placeholder="Password"
        keyboardType="number-pad"
        maxLength={10}
        // containerStyle={{height: 80}}
        inputContainerStyle={styles.inputContainer}
        inputStyle={{...Fonts.black16RobotoRegular}}
      />
    );
  }
  function topTitleInfo() {
    return (
      <Text
        style={{
          ...Fonts.primaryDark16RobotoMedium,
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 10,
        }}>
        Get Started With Fortune Talk!
      </Text>
    );
  }

  function imageInfo() {
    return (
      <View style={{flex: 0.3, justifyContent: 'center'}}>
        <Image
          source={require('../assets/images/user.png')}
          style={{
            width: '40%',
            height: '100%',
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: height * 0.1,
          }}
        />
      </View>
    );
  }

  function skipInfo() {
    return (
      <TouchableOpacity
        style={{
          flex: 0,
          alignSelf: 'flex-end',
          margin: Sizes.fixPadding * 2,
        }}>
        <Text style={{...Fonts.white11InterMedium}}>Skip</Text>
      </TouchableOpacity>
    );
  }
};

export default Login;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 0.8,
    backgroundColor: Colors.white,
    borderTopLeftRadius: Sizes.fixPadding * 7,
    paddingTop: Sizes.fixPadding * 2,
    marginTop: height * 0.09,
  },
  inputContainer: {
    marginHorizontal: Sizes.fixPadding * 3,
    borderWidth: 1,
    borderColor: Colors.grayLight,
    borderRadius: Sizes.fixPadding * 2,
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: 0,
    // marginTop: Sizes.fixPadding * 2,
  },
  flagContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: Sizes.fixPadding * 0.8,
    borderRightWidth: 1,
    borderColor: Colors.grayLight,
  },
  socialButton: {
    flex: 0,
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding * 0.8,
    borderRadius: Sizes.fixPadding,
  },
});
