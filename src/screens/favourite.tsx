import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ShopCard } from '../components/shopCard'
import { Text } from 'react-native-svg';
import { useFireStoreCol, useCollectionSearch, useFireStoreDoc } from '../hooks';
import auth from '@react-native-firebase/auth';

export const Favourite = () => {
  const user: any = auth().currentUser || {};
  // const userData = useFireStoreDoc(`users/${user.uid}`);
  const { collection } = useFireStoreCol(`users/${user.uid}/favourite`);
  console.log(collection)
 
  useEffect(() => {
    if (!collection.length) return
    
    const productData  = useFireStoreDoc(`products/${collection}`)
  }, [collection])

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* <Text style={styles.title} > */}
        {/* </Text> */}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color:{
    color:'green'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 20
  }
});
