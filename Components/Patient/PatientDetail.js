import React, { Component } from 'react';
import Care from '../Care/index'
import Wound from '../Wound/index'
import History from '../History/index'
import Overview from '../Overview/index'
import LargeHeader from '../Header/LargeHeader'
import * as Progress from 'react-native-progress';
import { Platform, Alert } from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input,
  Left, 
  Right, 
  Body,
  Button,
  Icon,
  Title,
  Text,
  Tab, 
  Tabs,
  Thumbnail,
  View,
  Fab
} from 'native-base';

class PatientDetail extends Component {

  componentDidMount() {
    console.log('Search DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Search WILL UNMOUNT');
  }

  handleFabPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('HarshPosition')
  }

  renderDialog = () => {
    return (
      Alert.alert(
        'บันทึกข้อมูลเรียบร้อย',
        null,
        [
          {text: 'ตกลง', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: true},
      )
    )
  }

  render() {
    const { navigation: { navigate }} = this.props
    const { goBack } = this.props.navigation
    const nav = this.props.navigation
    const { navigation } = this.props
    const msg = navigation.getParam('message', '')

    const style = {
      headerAndroid: {
        fontSize: 17,
        color: "#ffffff"
      },
      headerIos: {
        fontSize: 17,
        color: "#000000"
      },

      subHeaderAndroid: {
        fontSize: 10,
        color: "#ffffff",
        marginTop: "1%"
      },
      subHeaderIos: {
        fontSize: 10,
        color: '#000000',
        marginTop: "1%"
      }
    }

    //const message = navigation.getParam('message', '')
    return (
      <Container>
        <LargeHeader hasTab={true} navigation={this.props.navigation}/>
        <Tabs scrollWithoutAnimation={true} >
          <Tab heading="ดูแล">
            <Care nav={ navigate } />
          </Tab>
          <Tab heading="จัดการแผล">
            <Wound nav={ navigate } />
            <Fab
              onPress={ this.handleFabPress } 
              style={{ backgroundColor: '#1b5e20' }} 
              position="bottomRight">
              <Icon name="add" />
            </Fab>
          </Tab>
          <Tab heading="ประวัติแผล">
            <History nav={ navigate } />
          </Tab>
          <Tab heading="ภาพรวม">
            <Overview nav={ navigate }/>
          </Tab>
        </Tabs>
        { msg !== '' ? this.renderDialog() : null }
      </Container>
    );
  }
}

export default PatientDetail