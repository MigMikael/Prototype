import React, { Component } from 'react';
import Care from '../Care/index'
import Wound from '../Wound/index'
import History from '../History/index'
import Overview from '../Overview/index'
import LargeHeader from '../Header/LargeHeader'
import * as Progress from 'react-native-progress';
import { Platform } from 'react-native';
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

    return (
      <Container>
        {/* <Header hasTabs={true} style={{ height: 90 }}>
          <Left style={{ flexDirection: 'row' }}>
            <Button transparent onPress={() => goBack()}>
              <Icon name='md-arrow-round-back' />
            </Button>
            <Thumbnail source={ require('../../assets/inpitar.jpg') } />
            <View style={{ 
              flexDirection: 'column',
              marginLeft: "10%"
            }}>
              <Text style={ Platform.OS === "android" ? style.headerAndroid: style.headerIos }>นาย รักษา หายโดยไว</Text>
              <Text style={ Platform.OS === "android" ? style.subHeaderAndroid: style.subHeaderIos }>HN 0958029-1  AN 0958029-1  ตึก 2008 พิเศษ</Text>
              <View style={{ flexDirection: 'row', marginTop: "1%", paddingTop: '1%', paddingBottom: '1%' }}>
                <Text style={ Platform.OS === "android" ? style.subHeaderAndroid: style.subHeaderIos }>20%</Text>
                <View style={{ paddingTop: "2%", paddingBottom: "1%" }}>
                  <Progress.Bar progress={0.2} width={210} color={ Platform.OS === "android" ? '#ffffff': '#000000'} />
                </View>
              </View>
            </View>
          </Left>
          <Body />
        </Header> */}
        <LargeHeader hasTab={true} navigation={this.props.navigation}/>
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