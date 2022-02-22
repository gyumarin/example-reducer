import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';

import {exampleAction, examplePayloadAction, exampleEpicAction} from './slice';

const ExampleView = () => {
  const dispatch = useDispatch();

  const _value = useSelector((state: RootState) => state.rootReducer.new.value);
  const _processState = useSelector(
    (state: RootState) => state.rootReducer.new.processState,
  );

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            dispatch(exampleAction());
          }}>
          <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(examplePayloadAction({someValue1: 1, someValue2: 2}));
          }}>
          <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
            <Text style={{color: 'white'}}>슬라이스</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(exampleEpicAction({someValue1: 2, someValue2: 2}));
          }}>
          <View style={{width: 100, height: 100, backgroundColor: 'blue'}}>
            <Text style={{color: 'white'}}>에픽</Text>
          </View>
        </TouchableOpacity>
        <Text>{_value}</Text>
      </SafeAreaView>
    </View>
  );
};
export default ExampleView;
