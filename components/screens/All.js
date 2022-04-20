import React, { useEffect, useState } from 'react'
import { services } from '../services'
import moment from 'moment';
import { FlatList, NativeBaseProvider, Divider, Image,Spinner } from 'native-base';
import {View,Text,StyleSheet, Linking,Share} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';




export default function All() {

  const[newsData,setNewsData] = useState([])

    useEffect(()=> {
        services('general')
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
          <View style={styles.outer_container}>
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
              <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text key="description" style={styles.desc}>{item.source.name}</Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            <Divider my={2} bg="rgba(159, 156, 157, 0.20)" />
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

  outer_container:{
    backgroundColor:'#1e1e1f'
  },
  
  container:{
    padding:5,
    margin:15,
    backgroundColor:'#1e1e1f'
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:5,
    color:'white'
  },
  desc: {
    fontSize: 16,
    marginTop: 15,
    color:'white',
  },
  date: {
    fontSize: 12,
    color:'white',
  },
  img:{
    borderRadius:10,
  },
  spinner:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:900,
    backgroundColor:'#1e1e1f'
  }


})
