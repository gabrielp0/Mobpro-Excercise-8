/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../components/Atoms/TextInput';
import Gap from '../../components/Atoms/Gap';
import Button from '../../components/Atoms/Button';
import Button1 from '../../components/Atoms/Button1';

const SignIN = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Sign In</Text>
    <Gap height={40} />
    <TextInput label="Email Address" placeholder="Type your email address" />
    <Gap height={24} />
    <TextInput label="Password" placeholder="Type your password" />
    <Gap height={48} />
    <Button label="Sign In" />
    <Gap height={20}/>
    <Button1 label= "Create New Account" />
  </View>
  );
};

export default SignIN;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 33,
  },
});
