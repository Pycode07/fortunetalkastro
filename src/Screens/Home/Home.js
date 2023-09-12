import {
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useState} from 'react';
import MyStatusBar from '../../component/MyStatusBar';
import {Colors, Fonts} from '../../assets/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Switch} from 'react-native-switch';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('screen');

const Home = ({navigation}) => {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      {header()}
      <FlatList
        ListHeaderComponent={
          <>
            {AstriInfo()}
            {GoForPolicies()}
            {performance()}
            {Offer()}
          </>
        }
      />
    </View>
  );

  function header() {
    return (
      <View style={{borderBottomWidth: 0.8, borderEndColor: Colors.gray}}>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.05,
            alignSelf: 'center',
            justifyContent: 'center',
            height: 50,
          }}>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Image
              source={require('../../assets/icon/drawerIcon.png')}
              resizeMode="contain"
              style={{
                width: 26,
                height: 26,
                borderRadius: 25,
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{height: '100%', borderWidth: 0.9}} />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.8,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/images/appIcon.png')}
                resizeMode="contain"
                style={{
                  width: 29,
                  height: 29,
                  borderRadius: 25,
                  marginHorizontal: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.primaryLight,
                  fontFamily: 'Roboto-Medium',
                  alignSelf: 'center',
                }}>
                Fortune Talk
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/images/language.png')}
                resizeMode="contain"
                style={{width: 26, height: 26, borderRadius: 25}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  function AstriInfo() {
    return (
      <View
        style={{
          backgroundColor: Colors.white,
          height: height * 0.09,
          borderBottomWidth: 0.9,
          borderEndColor: Colors.gray,
        }}>
        <View style={{flexDirection: 'row', backgroundColor: Colors}}>
          <View
            style={{
              width: width * 0.3,
              justifyContent: 'center',
              borderBottomRadius: 0.6,
              alignItems: 'flex-end',
              borderRadius: 100,
              elevation: 10,

              shadowColor: Colors.blackLight,
              height: height * 0.08,
              backgroundColor: Colors.white,
              left: -40,
              bottom: 0,
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../assets/images/person.png')}
              resizeMode="contain"
              style={{
                width: 26,
                height: 26,
                borderRadius: 25,
                marginEnd: width * 0.07,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.8,
              backgroundColor: Colors.white,
              left: -40,
              padding: 15,
              height: height * 0.08,
              marginLeft: 10,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  ...Fonts.gray14RobotoMedium,
                  color: Colors.Dark_grayish_red,
                }}>
                Astro Ramalal guruji
              </Text>
              <Text style={{...Fonts.gray14RobotoMedium}}>ID-123456</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  height: '100%',
                  borderWidth: 0.9,
                  marginHorizontal: width * 0.06,
                }}
              />
              <Image
                source={require('../../assets/icon/search.png')}
                style={{alignSelf: 'center'}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  function GoForPolicies() {
    return (
      <View
        style={{
          padding: 18,
          // height: '15%',
          borderBottomWidth: 0.8,
          borderEndColor: Colors.gray,
        }}>
        <View
          style={{
            backgroundColor: Colors.primaryDark,
            height: height * 0.1,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.9,
              alignContent: 'center',
              padding: 15,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icon/danger.png')}
                resizeMode="contain"
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 25,
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: Colors.white,
                  fontSize: 16,
                }}>
                Important Policies
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: Colors.white,
                  fontSize: 16,
                }}>
                (Please Reacd all the Policies )
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Image source={require('../../assets/icon/BottomArrow.png')} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  function Offer() {
    return (
      <View style={{padding: 10}}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            color: Colors.black,
          }}>
          Marketing offers
        </Text>

        <View
          style={{
            padding: 15,
            backgroundColor: '#FEFDFF',
            borderRadius: 20,
            marginVertical: height * 0.01,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              color: Colors.primaryLight,
            }}>
            M0@0-Free Users
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: width * 0.7}}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  fontSize: 12,
                  color: Colors.Dark_grayish_red,
                }}>
                User gets first session free.Asrtrologer is Also not paid
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  fontSize: 12,
                  color: Colors.Dark_grayish_red,
                }}>
                Indian user with high spending capacity spends 5x more than
                other indian users.
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  fontSize: 12,
                  color: Colors.Dark_grayish_red,
                }}>
                Astrologers get opportunity to serve them better & convert to
                paid
              </Text>
            </View>
            <View>
              <Switch
                trackColor={{true: Colors.primaryDark, false: 'grey'}}
                // thumbColor={{true: Colors.primaryDark, false: 'grey'}}
                value={false}
                onValueChange={() => setSwitchValue(!switchValue)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  function performance() {
    return (
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          height: 150,
          justifyContent: 'space-between',
          // alignContent: 'center',
        }}>
        <View style={{height: 150, width: '100%'}}>
          <ImageBackground
            source={require('../../assets/images/performance.png')}
            style={{
              resizeMode: 'cover',
              height: '100%',
              // position: 'absolute',
              width: '110%',
            }}
          />
        </View>
        <View>
          <LinearGradient
            colors={[Colors.primaryLight, Colors.primaryDark]}
            style={{
              // justifyContent: 'center',
              position: 'absolute',
              zIndex: -1,
              // alignItems: 'flex-end',
            }}>
            <TouchableOpacity>
              <AntDesign name="right" size={26} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
};

export default Home;
