import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fourth from './Fourth';
import Second from './Second';
import Third from './Third';

export default function App() {
  return (
    <View style={{
      width: "100%",
      height: "100%"
    }}>
      {/* <Second />
      <Third /> */}
      <Fourth />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  boxH: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 80
  },
  box3: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 80

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerR: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',

  },
  column: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  columnR: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

  }
});
