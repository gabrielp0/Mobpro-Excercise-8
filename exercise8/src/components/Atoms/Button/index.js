/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#02CF8E',
    paddingVertical: 15,
    borderRadius: 10,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    fontWeight: '700',
  },
  Text: {
    fontFamily: 'Poppins - Medium',
  }
});
