import React, { Component } from 'react';
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
  Tabs
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
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>นาย รักษา หายโดยไว</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="ดูแล">
            <Text>Tab</Text>
          </Tab>
          <Tab heading="ทำแผล">
            <Text>Tab</Text>
          </Tab>
          <Tab heading="ประวัติ">
            <Text>Tab</Text>
          </Tab>
          <Tab heading="ภาพรวม">
            <Text>Tab</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default PatientDetail