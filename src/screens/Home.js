import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddToDo from '../components/home/AddToDo';
import ToDoList from '../components/home/ToDoList';
import Header from '../components/home/Header';
import {Col, Row, Grid} from 'react-native-easy-grid';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid style={{backgroundColor: '#E3EFFD'}}>
        <Col>
          <Row size={1.5}>
            <Header />
          </Row>
          <Row size={1}>
            <AddToDo />
          </Row>
          <Row size={10}>
            <ToDoList />
          </Row>
        </Col>
      </Grid>
    );
  }
}

export default connect()(Home);
