import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import Video from 'react-native-video';
import Images from '../../components/Images';

const size = Dimensions.get('screen');
const data = [
  {
    name: '@hoanganh.ngoduy',
    video: require('../../assets/videos/videos.mp4'),
    title: 'Apex lengent meme, funny game',
    hastag: '#game #meme #ahihi',
    music: 'Let me down slowly',
  },
  {
    name: '@abc.xyz',
    video: require('../../assets/videos/jisoo.mp4'),
    title: 'Apex lengent meme, funny game',
    hastag: '#game #meme #ahihi',
    music: 'Let me down slowly',
  },
  {
    name: '@abc.xyz',
    video: require('../../assets/videos/jisoo.mp4'),
    title: 'Apex lengent meme, funny game',
    hastag: '#game #meme #ahihi',
    music: 'Let me down slowly',
  },
  {
    name: '@abc.xyz',
    video: require('../../assets/videos/jisoo.mp4'),
    title: 'Apex lengent meme, funny game',
    hastag: '#game #meme #ahihi',
    music: 'Let me down slowly',
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      indexVideo: 0,
      animatedValue: new Animated.Value(0),
    };
  }

  onSetPausedVideo = index => {
    console.log(index);
    const {paused, indexVideo} = this.state;
    if (indexVideo == index) {
      this.setState({paused: !paused});
    } else {
      this.setState({paused: false, indexVideo: index});
    }
  };

  returnVideo = (item, index) => {
    const {paused, indexVideo} = this.state;
    const setPaused = indexVideo == index && paused == false ? false : true;
    return (
      <View key={index} style={{width: size.width, height: size.height - 131}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.onSetPausedVideo(index)}
          style={{flex: 1, position: 'relative'}}>
          <Video
            source={item.video}
            ref={ref => {
              this.player = ref;
            }}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.backgroundVideo}
            paused={setPaused}
            repeat={true}
          />
        </TouchableOpacity>
        <View style={styles.function}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              marginBottom: 55,
            }}>
            <View style={styles.userBox}>
              <View style={styles.dotAddUser}>
                <Image source={Images.icon_plus} style={styles.imgPlus} />
              </View>
            </View>
            <TouchableOpacity style={styles.iconStyle}>
              <Image
                resizeMode="center"
                style={styles.icon}
                source={Images.icon_hear}
              />
              <Text style={styles.textCout}>999</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconStyle}>
              <Image
                resizeMode="center"
                style={styles.icon}
                source={Images.icon_comment}
              />
              <Text style={styles.textCout}>999</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconStyle}>
              <Image
                resizeMode="center"
                style={styles.icon}
                source={Images.icon_share}
              />
              <Text style={styles.textCout}>999</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#ccc',
              borderRadius: 25,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: 'black',
              }}></View>
          </View>
        </View>

        {/* info video box */}
        <View style={styles.infoVideBox}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
            {item.name}
          </Text>
          <View style={{marginVertical: 10}}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.hastag}</Text>
          </View>
          <View style={{marginBottom: 5}}>
            <Text style={styles.text}>{item.music}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const scrolly = new Animated.Value(0).current;
    return (
      <SafeAreaView style={styles.container}>
        <Animated.ScrollView
          pagingEnabled
          scrollEnabled
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: scrolly}}},
          ])}
          snapToAlignment="center">
          {data.map((item, index) => {
            return this.returnVideo(item, index);
          })}
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}

onBuffer = () => {};

videoError = () => {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  function: {
    position: 'absolute',
    height: size.height / 2,
    width: 65,
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },
  userBox: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 25,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#fff',
  },
  dotAddUser: {
    position: 'absolute',
    width: 18,
    height: 18,
    backgroundColor: 'red',
    borderRadius: 18 / 2,
    bottom: -5,
    left: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPlus: {
    width: 8,
    height: 8,
    tintColor: '#fff',
  },
  infoVideBox: {
    position: 'absolute',
    // width: size.width - 65,
    maxHeight: 100,
    minHeight: 50,
    bottom: 0,
    right: 65,
    left: 0,
    paddingLeft: 15,
    marginBottom: 10,
  },
  icon: {
    height: 40,
    tintColor: '#fff',
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCout: {
    color: '#fff',
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
});
