import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {styles} from './styles';
import {getGorestEpicAction, deleteGorestAction} from './gorestSlice';
import {defaultEpicAction} from '../DEFAULT/defaultSlice';
import {user} from './types';
import {RootState} from '../store';
import {ProcessState} from '../DEFAULT/types';

const GorestView = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state: RootState) => state.rootReducer.gorest.gorest.data,
  );
  const number = useSelector(
    (state: RootState) => state.rootReducer.default.value,
  );
  const status = useSelector(
    (state: RootState) => state.rootReducer.default.processState,
  );
  const second = useSelector(
    (state: RootState) => state.rootReducer.default.second,
  );

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(getGorestEpicAction());
            }}>
            <Text style={styles.text}>get GOREST</Text>
          </TouchableOpacity>

          <FlatList
            data={data} //♦︎필수 뿌릴 데이터 배열
            renderItem={({item, index}) => <UserItem item={item as user} />}
            //♦︎ 필수 data를 가지고 뿌리는 함수
            style={styles.flat}
          />
        </View>

        <View style={styles.container}>
          <View>
            <Button
              title="Learn More"
              onPress={() => {
                dispatch(defaultEpicAction());
              }}
              style={styles.button}
              // disabled={status === ProcessState.LOADING}
            />
          </View>

          <Text style={styles.text}>value : {number}</Text>
          <Text style={styles.text}>second : {second}</Text>
          <Text style={styles.text}>{status}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default GorestView;

interface Props {
  item: user;
}

const UserItem = ({item}: Props) => {
  const {email, gender, id, name, status} = item;
  //   console.log(item);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.ItemContainer}
      onPress={() => {
        dispatch(deleteGorestAction({id: id}));
      }}>
      <Text>id : {id}</Text>
      <Text>name : {name}</Text>
      <Text>email : {email}</Text>
    </TouchableOpacity>
  );
};
