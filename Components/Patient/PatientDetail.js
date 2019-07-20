import React, { Component } from 'react';
import Care from '../Care/index'
import Wound from '../Wound/index'
import History from '../History/index'
import Overview from '../Overview/index'
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
  Thumbnail
} from 'native-base';

class PatientDetail extends Component {

  componentDidMount() {
    console.log('Search DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Search WILL UNMOUNT');
  }

  render() {
    return (
      <Container>
        <Header hasTabs style={{ height: 100 }}>
          <Left style={{ flexDirection: 'row' }}>
            <Button transparent>
              <Icon name='md-arrow-round-back' />
            </Button>
            <Thumbnail source={ require('../../assets/inpitar.jpg') } />
          </Left>
          <Body>
            <Title>นาย รักษา หายโดยไว</Title>
            <Text style={{
              color: "#ffffff",
              fontSize: 12,
              marginTop: "1%"
            }}>AN 0958029-1  AN 0958029-1  ตึก 2008 พิเศษ</Text>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="ดูแล">
            <Care />
          </Tab>
          <Tab heading="ทำแผล">
            <Wound />
          </Tab>
          <Tab heading="ประวัติ">
            <History />
          </Tab>
          <Tab heading="ภาพรวม">
            <Overview />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default PatientDetail