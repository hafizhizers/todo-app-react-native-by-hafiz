import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import {
  deleteToDo,
  editViewToDo,
  editToDoText,
  updateToDo,
} from '../../stores/actions/toDoActions';

const ToDoList = props => {
  return (
    <>
      <FlatList
        data={props.toDoDataSource}
        renderItem={({item}) => (
          <Row size={5} style={styles.item}>
            <Row size={5}>
              {props.editView == item.id ? (
                <TextInput
                  placeholder="Type anything..."
                  underlineColorAndroid="transparent"
                  maxLength={30}
                  onChangeText={textItem => props.onChangeTextEdit(textItem)}
                />
              ) : (
                <Text style={styles.description}>{item.description}</Text>
              )}
            </Row>

            <Row size={1} style={{justifyContent: 'space-between'}}>
              {props.editView == item.id ? (
                <Icon
                  onPress={() =>
                    props.onClickUpdate({
                      id: item.id,
                      description: props.editToDoText,
                    })
                  }
                  size={25}
                  name="check-bold"
                  color="grey"
                />
              ) : (
                <Icon
                  onPress={
                    () => props.onClickEdit(item.id) //toggle
                  }
                  size={25}
                  name="pencil"
                  color="grey"
                />
              )}

              <Icon
                onPress={() => props.onClickDelete(item.id)}
                size={25}
                name="window-close"
                color="grey"
              />
            </Row>
          </Row>
        )}
        extraData={props.toDoDataSource}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    color: '#538CDC',
  },
  item: {
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
  },
});

const mapStateToProps = state => {
  return {
    editToDoText: state.toDoReducers.editToDoText,
    editView: state.toDoReducers.editView,
    toDoDataSource: state.toDoReducers.toDoDataSource,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickDelete: id => dispatch(deleteToDo(id)),
  onClickEdit: id => dispatch(editViewToDo(id)),
  onChangeTextEdit: textItem => dispatch(editToDoText(textItem)),
  onClickUpdate: item => dispatch(updateToDo(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
