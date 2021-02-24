import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  image: string;
  name: string;
  price: string;
  id: string;
  perItemWeight: string;
}

export const ShopCard: React.FC<Props> = ({
  image,
  name,
  price,
  id,
  perItemWeight,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.perItemWeight}>{perItemWeight}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: '#53B175',
            borderRadius: 17,
          }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 250,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageContainer: {
    width: 170,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 30,
  },
  perItemWeight: {
    width: 140,
    fontSize: 16,
    lineHeight: 17,
    opacity: 0.6,
  },
  priceContainer: {
    height: 50,
    width: 140,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
});
