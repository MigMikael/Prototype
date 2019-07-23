import React, { Component } from 'react'
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

class LargeHeader extends Component {
  render() {
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

    const { goBack } = this.props.navigation

    return (
      <Header style={{ height: 90 }} hasTabs={ this.props.hasTabs }>
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
      </Header>
    )
  }
}

export default LargeHeader