import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ShopCard } from '../components/shopCard'
import { Text } from 'react-native-svg';
import { useFireStoreCol, useFireStoreDoc } from '../hooks';
import auth from '@react-native-firebase/auth';

const FavCard = ({ id }: any) => {
  const productData = useFireStoreDoc(`products/${id.productId}`).doc;
  console.log(productData.name)

  return (
    <View>
      
    </View>
  )

}

export const Favourite = () => {
  const user: any = auth().currentUser || {};
  // const userData = useFireStoreDoc(`users/${user.uid}`);
  const { collection } = useFireStoreCol(`users/${user.uid}/favourite`);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* <Text style={styles.title} > */}
        {/* </Text> */}
        <FlatList data={collection} renderItem={({ item }) => <FavCard id={item} />} />
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
  color: {
    color: 'green'
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
