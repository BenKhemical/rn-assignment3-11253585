import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import TaskItem from './components/TaskItem';

const categories = [
  { category: 'Exercise', tasksCount: 12, imageSource: require('./assets/exercise.png') },
  { category: 'Study', tasksCount: 12, imageSource: require('./assets/study.png') },
  { category: 'Code', tasksCount: 10, imageSource: require('./assets/code.png') },
  { category: 'Cook', tasksCount: 8, imageSource: require('./assets/cook.png') },
  { category: 'Social', tasksCount: 5, imageSource: require('./assets/social.png') },
  { category: 'Adventure', tasksCount: 6, imageSource: require('./assets/adventure.png') },
  { category: 'Reading', tasksCount: 9, imageSource: require('./assets/exercise.png') },
  { category: 'Art', tasksCount: 4, imageSource: require('./assets/art.png') },
];

const tasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Design a User Interface',
  'Fix Bugs in the Code',
  'Run 5 Kilometers',
  'Finish Reading a Chapter',
  'Bake a Cake',
  'Evening Pilates',
  'Conduct a Webinar',
  'Buy Fresh Vegetables',
  'Write a Research Paper',
  'Merge Code Changes',
  'Book Hotel for Trip',
  'Attend Dance Class',
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header username="Devs" tasksCount={14} />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={require('./assets/icon.png')} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('./assets/Filter.png')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal style={styles.categoriesContainer}>
        {categories.map((item, index) => (
          <CategoryCard
            key={index}
            category={item.category}
            tasksCount={item.tasksCount}
            imageSource={item.imageSource}
          />
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={styles.tasksContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 0,
  },
  filterButton: {
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  tasksContainer: {
    paddingHorizontal: 20,
  },
});

export default App;
