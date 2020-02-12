import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

const Header = props => {
  return (
    <>
      <Text style={styles.title}>My To-do List</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#538CDC',
    alignSelf: 'flex-end',
    marginLeft: '5%',
  },
});

export default Header;
