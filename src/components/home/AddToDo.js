import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TextInput, TouchableHighlight} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {addToDo, toDoText} from '../../stores/actions/toDoActions';

const AddToDo = props => {
  let dataToAdd = {
    id: Date.now(),
    description: props.toDoText,
  };

  return (
    <>
      <Row style={{justifyContent: 'space-between', marginHorizontal: '5%'}}>
        <TextInput
          placeholder="Type anything..."
          underlineColorAndroid="transparent"
          maxLength={30}
          value={props.toDoText}
          onChangeText={textItem => props.onChangeText(textItem)}
        />

        <TouchableHighlight
          style={styles.btn}
          onPress={() => props.onClickAdd(dataToAdd)}>
          <Text style={styles.addText}>Add</Text>
        </TouchableHighlight>
      </Row>
    </>
  );
};

const mapStateToProps = state => {
  return {
    toDoText: state.toDoReducers.toDoText,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickAdd: dataToAdd => addToDo(dataToAdd, dispatch),
  onChangeText: textItem => dispatch(toDoText(textItem)),
});

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    backgroundColor: '#538CDC',
    borderRadius: 5,
    width: 100,
    height: 30,
    alignSelf: 'center',
  },
  addText: {
    alignSelf: 'center',
    color: 'white',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
