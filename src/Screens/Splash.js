import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import MyStatusBar from '../component/MyStatusBar';
import LinearGradient from 'react-native-linear-gradient';
// import {Colors} from '../assets/style';
import {CommonActions} from '@react-navigation/native';
import Video from 'react-native-video';
import {SCREEN_WIDTH} from '../config/Screen';
import {Colors} from '../assets/style';

const {width} = Dimensions.get('window');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      go_login();
    }, 5000);
  }, []);

  const go_login = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'AcceptCall'}],
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={useColorScheme.primaryLight}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Image
          source={require('../assets/images/splash_logo.png')}
          style={{width: width * 0.35, height: width * 0.35}}
        /> */}

        <Video
          source={require('../assets/vedios/splash.mp4')} // Can be a URL or a local file.
          resizeMode="cover"
          muted={true}
          repeat
          style={styles.backgroundVideo}
        />
      </LinearGradient>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: SCREEN_WIDTH * 0.6,
    width: SCREEN_WIDTH * 0.6,
    backgroundColor: 'transparent',
  },
});
