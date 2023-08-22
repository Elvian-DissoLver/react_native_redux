// CounterScreen.js
import React from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './actions';
import {Button, Text, View} from 'react-native';
import {AnyAction} from 'redux';

interface CounterScreenProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterScreen = ({count, increment, decrement}: CounterScreenProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const mapStateToProps = (state: AnyAction) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
