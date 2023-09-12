import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Colors, Fonts, Sizes} from '../assets/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyStatusBar from '../component/MyStatusBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Divider, Input} from '@rneui/themed';
import {SCREEN_HEIGHT} from '../config/Screen';

const chatData = [
  {
    id: 1,
    message:
      'Hi Sweta \nbelow are my details\nName: Sayali Chavan\nBirth Date: 5-08-1999\nBirth Time: 6:50 PM\nGender: Female\nBirth Place: Mumbai, Maharashtra, India\nProblem: Wealth and Property\nPreferred Language: Hindi',
    type: 0,
    time: new Date(),
    from: 'customer',
  },
  {
    id: 2,
    message:
      'Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor.',
    type: 1,
    time: new Date(),
    from: 'astro',
    image: require('../assets/images/user.png'),
  },
  {
    id: 3,
    message:
      'Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor.',
    type: 1,
    time: new Date(),
    from: 'customer',
  },
];

const ChatScreen = ({navigation}) => {
  const [chat_data, setChatData] = useState(chatData.reverse());
  const memorizedChat = useMemo(() => chat_data, [chat_data]);

  const [state, setState] = useState({
    keyboardHeight: -40,
  });

  const updateState = data => setState({...state, ...data});

  const {keyboardHeight} = state;

  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      {header()}
      <KeyboardAvoidingView keyboardVerticalOffset={64} style={{flex: 1}}>
        <View style={styles.container}>
          {topButtonsInfo()}
          {chatInfo()}
          {inputFieldInfo()}
        </View>
      </KeyboardAvoidingView>
    </View>
  );

  function inputFieldInfo() {
    return (
      <View>
        <Input
          placeholder="Enter message..."
          placeholderTextColor={Colors.gray}
          inputStyle={{...Fonts.black14InterMedium, padding: 0}}
          inputContainerStyle={{borderBottomWidth: 0, height: 45}}
          containerStyle={{
            backgroundColor: Colors.white,
            marginTop: Sizes.fixPadding,
            height: 45,
            paddingBottom: Sizes.fixPadding,
          }}
          leftIcon={
            <View style={[styles.row]}>
              <TouchableOpacity style={{transform: [{rotate: '45deg'}]}}>
                <Ionicons name="attach" color={Colors.blackLight} size={28} />
              </TouchableOpacity>
              <Divider
                orientation="vertical"
                color={Colors.gray}
                style={{
                  height: '100%',
                  marginHorizontal: Sizes.fixPadding * 0.5,
                }}
              />
            </View>
          }
          rightIcon={
            <TouchableOpacity
              style={{
                paddingHorizontal: Sizes.fixPadding * 2,
                paddingVertical: Sizes.fixPadding * 0.7,
                borderRadius: 1000,
                backgroundColor: Colors.primaryLight,
              }}>
              <Text style={{...Fonts.white14RobotoMedium}}>Send</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }

  function chatInfo() {
    const renderItem = ({item, index}) => {
      return (
        <View style={{transform: [{scaleY: -1}]}}>
          {item.type == 0 ? (
            <LinearGradient
              colors={[Colors.primaryLight, Colors.primaryDark]}
              style={{
                width: '70%',
                alignSelf: 'flex-start',
                padding: Sizes.fixPadding,
                borderRadius: Sizes.fixPadding,
                marginTop: Sizes.fixPadding * 2,
              }}>
              <Text style={{...Fonts.white12RobotoRegular}}>
                {item.message}
              </Text>
            </LinearGradient>
          ) : item.from == 'customer' ? (
            <View
              style={{
                alignSelf: 'flex-end',
                marginTop: Sizes.fixPadding * 2,
                ...styles.row,
                alignItems: 'flex-end',
              }}>
              <View
                style={{
                  width: '75%',
                  padding: Sizes.fixPadding,
                  borderRadius: Sizes.fixPadding,
                  backgroundColor: Colors.white,
                  marginRight: Sizes.fixPadding,
                  borderBottomRightRadius: 0,
                }}>
                <Text style={{...Fonts.black12RobotoRegular}}>
                  {item.message}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: Colors.primaryLight,
                  width: 25,
                  height: 25,
                  ...styles.center,
                  borderRadius: 1000,
                }}>
                <Text style={{...Fonts.white12RobotoMedium}}>ME</Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                alignSelf: 'flex-start',
                marginTop: Sizes.fixPadding * 2,
                ...styles.row,
                alignItems: 'flex-start',
              }}>
              <Image
                source={item.image}
                style={{width: 26, height: 26, borderRadius: 25}}
              />
              <View
                style={{
                  width: '75%',
                  padding: Sizes.fixPadding,
                  borderRadius: Sizes.fixPadding,
                  backgroundColor: Colors.white,
                  marginLeft: Sizes.fixPadding,
                  borderTopLeftRadius: 0,
                }}>
                <Text style={{...Fonts.black12RobotoRegular}}>
                  {item.message}
                </Text>
              </View>
            </View>
          )}
        </View>
      );
    };
    return (
      <View style={{flex: 1, transform: [{scaleY: -1}]}}>
        <FlatList
          data={memorizedChat}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingHorizontal: Sizes.fixPadding * 2}}
        />
      </View>
    );
  }

  function topButtonsInfo() {
    return (
      <View
        style={[
          // styles.row,
          {
            justifyContent: 'center',
            marginVertical: Sizes.fixPadding * 2,
            backgroundColor: 'transparent',
            alignItems: 'center',
          },
        ]}>
        <View
          style={{
            backgroundColor: Colors.primaryLight,
            width: '30%',
            paddingVertical: Sizes.fixPadding * 0.5,
            borderRadius: 1000,
          }}>
          <Text style={{...Fonts.white16RobotoMedium, textAlign: 'center'}}>
            05:00
          </Text>
        </View>
        <Text
          style={{
            ...Fonts.gray16RobotoMedium,
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Chat in progress
        </Text>
      </View>
    );
  }

  function header() {
    return (
      <View
        style={{
          padding: Sizes.fixPadding * 1.5,
          ...styles.row,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignSelf: 'flex-start',
            flex: 0.1,
          }}>
          <AntDesign
            name="leftcircleo"
            color={Colors.primaryDark}
            size={Sizes.fixPadding * 2.2}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...Fonts.white16RobotoMedium,
            textAlign: 'center',
            color: Colors.primaryDark,
            flex: 0.6,
          }}>
          Suman
        </Text>
        <TouchableOpacity
          style={{
            width: '20%',
            backgroundColor: Colors.red2,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 6,
          }}>
          <Text style={{...Fonts.white12RobotoRegular}}>End Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default ChatScreen;

const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.grayLight,
    borderTopLeftRadius: Sizes.fixPadding * 4,
    elevation: 8,
  },
});
