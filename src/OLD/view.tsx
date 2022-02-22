import React, {Component} from 'react';
import {SafeAreaView, View, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {processResetReducer, processOneReducer} from './actions';

//Object.freeze : 동결된 객체 -> 더이상 변경될 수 없다.
export const ProcessState = Object.freeze({
  None: 0,
  ONE: 1,
});

interface Props {
  processResetReducer: () => Action;
  processOneReducer: () => Action;
  processState: number;
}

class OLDView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  state = {};

  //컴포넌트가 마운트 된 직 후에
  componentDidMount() {}

  //컴포넌트가 마운트 되기 직전에
  componentWillMount() {}

  //컴포넌트가 언마운트 되기 직전에
  componentWillUnmount() {}

  //컴포넌트가 업데이트 될때
  shouldComponentUpdate() {
    //Props로 받은 state가
    switch (this.props.processState) {
      case ProcessState.None:
        break;
      default:
        break;
    }

    return true;
  }

  render(): JSX.Element {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Button
          title="RESET"
          onPress={() => {
            //mapDispatchToProps에 선언된 processResetReducer
            this.props.processResetReducer();
          }}
        />
        <Button
          title="ONE"
          onPress={() => {
            //mapDispatchToProps에 선언된 processOneReducer
            this.props.processOneReducer();
          }}
        />
        <Text style={{fontSize: 55}}>{this.props.processState}</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    processState: state.rootReducer.old.processState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => {
  return {
    //actions.ts에 있는 processResetReducer 호출
    processResetReducer: () => dispatch(processResetReducer()),
    //actions.ts에 있는 processOneReducer 호출
    processOneReducer: () => dispatch(processOneReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OLDView);
