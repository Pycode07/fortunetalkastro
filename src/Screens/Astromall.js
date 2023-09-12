import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React from 'react';
import MyStatusBar from '../component/MyStatusBar';
import MyHeader from '../component/MyHeader';
import {Colors} from '../assets/style';
const {width, height} = Dimensions.get('screen');
const Astromall = props => {
  const DATA = [
    {
      id: 1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'First Item',
    },
    {
      id: 3,
      title: 'First Item',
    },
    {
      id: 4,
      title: 'First Item',
    },
    {
      id: 5,
      title: 'First Item',
    },
    {
      id: 6,
      title: 'First Item',
    },
    {
      id: 7,
      title: 'First Item',
    },
    {
      id: 6,
      title: 'First Item',
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        padding: 10,
        justifyContent: 'center',
        backgroundColor: Colors.dakWhite,
        flex: 0,
        width: '45%',
        marginHorizontal: width * 0.025,
        marginBottom: 15,
        borderRadius: 15,
      }}>
      <Image
        source={require('../assets/images/mall.png')}
        style={{width: '100%', height: width * 0.4}}
      />

      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Roboto-Medium',
          textAlign: 'center',
          color: Colors.black,
        }}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader Title="Astromall" />

      <View style={{flex: 0}}>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingVertical: 15}}
        />
      </View>
    </View>
  );
};

export default Astromall;
