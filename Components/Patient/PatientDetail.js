import React, { Component } from 'react';
import Care from '../Care/index'
import Wound from '../Wound/index'
import History from '../History/index'
import Overview from '../Overview/index'
import * as Progress from 'react-native-progress';
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
  View
} from 'native-base';

class PatientDetail extends Component {

  componentDidMount() {
    console.log('Search DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Search WILL UNMOUNT');
  }

  render() {
    const { navigation: { navigate }} = this.props
    const { goBack } = this.props.navigation
    return (
      <Container>
        <Header hasTabs style={{ height: 90 }}>
          <Left style={{ flexDirection: 'row' }}>
            <Button transparent onPress={() => goBack()}>
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
            <View style={{ flexDirection: 'row', marginTop: "1%", paddingTop: '1%', paddingBottom: '1%' }}>
              <Text style={{ color: "#ffffff", fontSize: 12, paddingEnd: "1%" }}>20%</Text>
              <View style={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Progress.Bar progress={0.2} width={218} color={"#ffffff"}/>
              </View>
            </View>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="ดูแล">
            <Care nav={ navigate } />
          </Tab>
          <Tab heading="ทำแผล">
            <Wound nav={ navigate } />
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