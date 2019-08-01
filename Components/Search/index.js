import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
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
  View
} from 'native-base';

class Search extends Component {

  handleScanPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('Scan')
  }

  handlePatientPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('PatientDetail')
  }

  componentDidMount() {
    console.log('Search DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Search WILL UNMOUNT');
  }

  render() {
    const { openDrawer } = this.props.navigation
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{ marginTop: "30%" ,textAlign: "center", fontSize: 25 }}>
            ผู้ป่วยที่มีประวัติการรักษาแล้ว
          </Text>
          <Form style={{ marginTop: "5%", marginStart: "5%", marginEnd: "5%"}}>
            <Item regular>
              <Input placeholder='HN/AN'/>
              <Icon active name='search' onPress={this.handlePatientPress}/>
            </Item>
          </Form>

          <View style={{ marginTop: "10%", marginStart: "5%", marginEnd: "5%"}}>
            <Button primary block onPress={this.handleScanPress}>
              <Text>Scan Barcode</Text>
            </Button>
          </View>

          <View style={{
            marginTop: "25%",
            marginStart: "5%", 
            marginEnd: "5%",
            borderBottomColor: '#e5e5e5',
            borderBottomWidth: 1,
          }}/>

          <View style={{ marginTop: "25%", marginStart: "15%", marginEnd: "15%"}}>
            <Button primary block bordered>
              <Text>ลงทะเบียนผู้ป่วยใหม่</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Search