import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ username, tasksCount }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.greeting}>Hello , {username}</Text>
        <Text style={styles.tasksCount}>{tasksCount} tasks today</Text>
      </View>
      <Image
        source={require("../assets/Frame 1.png")}
        style={styles.userIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 34,
  },
  tasksCount: {
    fontSize: 16,
    color: 'black',
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 55,
    marginRight: 10,
  },
});

export default Header;
