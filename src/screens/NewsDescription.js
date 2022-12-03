import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Linking,
  TouchableOpacity,
  Share,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import ShareIcon from 'react-native-vector-icons/AntDesign';
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import Bookmark from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
export default function NewsDescription({route}) {
  const isDarkMode = useColorScheme() === 'dark';
  const news = route.params.news;
  const navigation = useNavigation();
  const category = route.params.Category;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${news.url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={[styles.header, {position: 'relative'}]}>
        <ImageBackground
          resizeMode="cover"
          imageStyle={{opacity: 0.9}}
          style={{
            width: '100%',
            height: 400,
            opacity: 0.8,
            backgroundColor: 'rgba(0,0,0,1)',
          }}
          source={{
            uri: news.urlToImage,
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}>
            <View
              style={{
                backgroundColor: isDarkMode? '#181818':'white',
                position: 'absolute',
                margin: 15,
                padding: 10,
                zIndex: 9999,
                borderRadius: 50,
              }}>
              <ArrowLeft size={25} name="arrowleft" color={isDarkMode? 'white':'black'}/>
            </View>
          </TouchableOpacity>
          <View
            style={{position: 'absolute', bottom: '15%', padding: 20, flex: 1}}>
            <Text
              style={{
                fontSize: 15,
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.85)' : 'white',
                padding: 8,
                borderRadius: 15,
                fontWeight: 'bold',
                color: isDarkMode ? 'white' : 'black',
              }}>
              {category}
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: '25%', padding: 20}}>
            <Text
              style={{
                fontSize: 25,
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {news.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={[
          styles.footer,
          {backgroundColor: isDarkMode ? '#181818' : 'white'},
        ]}>
        <View
          style={[
            styles.Iconstyle,
            {
              right: '10%',
              top: -30,
              backgroundColor: isDarkMode ? '#181818' : 'white',
            },
          ]}>
          <TouchableOpacity onPress={onShare}>
            <ShareIcon
              name="sharealt"
              size={25}
              color={isDarkMode ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.Iconstyle,
            {
              right: '35%',
              top: -30,
              backgroundColor: isDarkMode ? '#181818' : 'white',
            },
          ]}>
          <TouchableOpacity>
            <Bookmark
              name="bookmark"
              size={25}
              color={isDarkMode ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text
            style={{
              color: 'black',
              fontSize: 23,
              fontWeight: 'bold',
              color: isDarkMode ? 'white' : 'black',
            }}>
            {news.source.name}
          </Text>
          {news.author ? (
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontWeight: '500',
                color: isDarkMode ? 'white' : 'black',
              }}>
              Author : {news.author}
            </Text>
          ) : (
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontWeight: '500',
                color: isDarkMode ? 'white' : 'black',
              }}>
              Author : N/A
            </Text>
          )}
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '100',
              color: isDarkMode ? 'white' : 'black',
            }}>
            {moment(news.publishedAt).format('LLL')}
          </Text>
          <Text
            style={{
              flexWrap: 'wrap',
              color: 'black',
              marginTop: 15,
              fontWeight: '100',
              fontSize: 18,
              color: isDarkMode ? 'white' : 'black',
            }}>
            {news.description}
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL(news.url)}>
            <Text
              style={{
                flexWrap: 'wrap',
                marginTop: 15,
                fontWeight: '100',
                fontSize: 18,
                color: isDarkMode ? 'white' : 'black',
              }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
  },
  footer: {
    flex: 3,
    padding: 40,
    position: 'relative',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Iconstyle: {
    position: 'absolute',
    zIndex: 99,
    padding: 20,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
