import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors, Sizes, Fonts} from '../assets/style';
const {width, height} = Dimensions.get('screen');

const MyHeader = ({navigation, Title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: Colors.blackLight,
      }}>
      <View
        style={{
          width: width * 0.1,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="leftcircleo"
            color={Colors.primaryDark}
            size={26}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: width * 0.7,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: Colors.primaryDark,
            fontWeight: '400',
            fontFamily: 'Roboto-Medium',
            textAlign: 'center',
            bottom: 4,
          }}>
          {Title}
        </Text>
      </View>
    </View>
   
  );
};

export default MyHeader;
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
