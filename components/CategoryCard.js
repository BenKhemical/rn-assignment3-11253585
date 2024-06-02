import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ category, tasksCount, imageSource }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.tasksCount}>{tasksCount} Tasks</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    padding: 40,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
  categoryText: {
    fontSize: 18,
    marginVertical: 5,
    color: 'black',
    textAlign: 'left', 
    marginLeft: 8,
  },
  tasksCount: {
    fontSize: 14,
    color: 'gray', 
    textAlign: 'left',
    marginLeft: 8,
  },
});

export default CategoryCard;
