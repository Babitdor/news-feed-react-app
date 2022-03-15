import React, { useEffect, useState } from 'react'
import { services } from '../services'
import moment from 'moment';
import { FlatList, ScrollView, NativeBaseProvider, Divider, Image,Spinner, Center } from 'native-base';
import {View,Text,StyleSheet,Linking} from 'react-native'
import { TouchableOpacity } from 'react-native';

export default function All() {
  const[newsData,setNewsData] = useState([])

    useEffect(()=> {
        services('sports')
        .then(data => {
          setNewsData(data)
        })
        .catch(error => {
          alert(error)
        })
    },[])

  return (
    <NativeBaseProvider>
      {newsData.length > 1 ? (<FlatList
        data={newsData}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
            onPress={ ()=>{ Linking.openURL(item.url)}}>
            <View style={styles.container}>
            <Image style={styles.img}
                width={550}
                height={250}
                resizeMode={"cover"}
                source={{uri: item.urlToImage,}}
                alt="Alternate Text"
              />
              <Text key="title" style={styles.title}>{item.title}</Text>
              <Text key="publishedAt" style={styles.date}>{moment(item.publishedAt).format('LLL')}</Text>
              <Text key="description" style={styles.desc}>{item.description}</Text>
            </View>
            </TouchableOpacity>
            <Divider my={2} bg="#e0e0e0" />
          </View>
        )}
        keyExtractor={(item,index) => index}
      />
      ) : (
        <View style={styles.spinner}>
            <Spinner color="danger.400" />
        </View>
    )}
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create ({

  container:{
    padding:15,
    borderRadius:20,
    margin:15,
    backgroundColor:'white'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:5,
  },
  desc: {
    fontSize: 16,
    marginTop: 10
  },
  date: {
    fontSize: 14
  },
  img:{
    borderRadius:10,
  },
  spinner:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:800,
  }


})
