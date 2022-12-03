import React, {useEffect, useState} from 'react';
import {services} from '../utils/services';
import moment from 'moment';
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  useColorScheme,
} from 'react-native';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import CategoryButtons from '../components/CategoryButtons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import BottomTab from '../components/BottomTab';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function NewsScreen() {
  const [newsData, setNewsData] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';
  const [Refresh, setRefresh] = useState(false);
  const [Category, setCategory] = useState('Sports');
  const navigation = useNavigation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  useEffect(() => {
    services(Category)
      .then(data => {
        setNewsData(data);
      })
      .catch(error => {
        alert(error);
      });
  }, [Refresh, Category]);

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
        position: 'relative',
      }}>
      <Text
        style={{
          color: isDarkMode ? 'white' : 'black',
          fontSize: 40,
          margin: 25,
          fontWeight: 'bold',
        }}>
        News
      </Text>
      <CategoryButtons Category={Category} setCategory={setCategory} />
      {newsData.length > 1 ? (
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          refreshing={newsData ? false : true}
          onRefresh={() => setRefresh(Refresh => !Refresh)}
          data={newsData}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('NewsDescription', {
                    news: item,
                    Category: Category,
                  });
                  //   Linking.openURL(item.url);
                }}>
                <View
                  style={[
                    styles.container,
                    {backgroundColor: isDarkMode ? '#181818' : 'white'},
                  ]}>
                  <View style={{position: 'relative'}}>
                    <Image
                      style={styles.img}
                      resizeMode={'cover'}
                      source={{uri: item.urlToImage}}
                      alt="Alternate Text"
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 0,
                        padding: 20,
                      }}>
                      <Text
                        key="title"
                        style={[styles.title, {color: 'white'}]}>
                        {item.title}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.NewsText}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        key="description"
                        style={[
                          styles.desc,
                          {color: isDarkMode ? 'white' : 'black'},
                        ]}>
                        {item.source.name}
                      </Text>
                    </View>
                    <Text
                      key="publishedAt"
                      style={[
                        styles.date,
                        {color: isDarkMode ? 'white' : 'black'},
                      ]}>
                      {moment(item.publishedAt).format('LLL')}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.spinner}>
          <ActivityIndicator
            size="large"
            color={isDarkMode ? '#0000ff' : 'blue'}
          />
        </View>
      )}
      <BottomTab />
      
    </View>
  );
}

const styles = StyleSheet.create({
  NewsText: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  container: {
    overflow: 'hidden',
    borderRadius: 30,
    marginTop: 55,
    marginLeft: windowWidth / 12,
    marginRight: windowWidth / 12,
    width: windowWidth / 1.2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -0.5, height: 0.2},
    textShadowRadius: 10,
    color: 'white',
  },
  desc: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 1,
    color: 'white',
  },
  date: {
    fontSize: 13,
    color: 'white',
  },
  img: {
    width: windowWidth,
    height: 500,
    opacity: 0.8,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    backgroundColor: '#1e1e1f',
  },
});
