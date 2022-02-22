import React from 'react';
import {SafeAreaView, ScrollView, Text, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

const ContainView = ({navigation}) => {
  return (
    <View>
      <SafeAreaView />
      <Button
        title="OLD "
        onPress={() => {
          navigation.navigate(`OLD`);
        }}
      />
      <Button
        title="NEW "
        onPress={() => {
          navigation.navigate(`NEW`);
        }}
      />
      <Button
        title="GOREST "
        onPress={() => {
          navigation.navigate(`GOREST`);
        }}
      />

      <SafeAreaView />
    </View>
  );
};

export default ContainView;
