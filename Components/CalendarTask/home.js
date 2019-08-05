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
  View,
  Picker,
  Card,
  CardItem,
  List
} from 'native-base';

import { ScrollView, Dimensions } from 'react-native'
import SmallCard from '../Patient/SmallCard'
import patients from '../../Data/patient'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class CalendarTask extends Component {

  render() {
    const { navigation: { navigate }} = this.props
    const { openDrawer } = this.props.navigation
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>ปฏิทินงาน</Title>
          </Body>
          <Right >
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" style={{ color: "#ffffff" }} />}
              style={{ color: "#ffffff" }}
              placeholder="หน่วยงาน"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff">
              <Picker.Item label="หน่วยงาน 1" value="key0" />
              <Picker.Item label="หน่วยงาน 2" value="key1" />
              <Picker.Item label="หน่วยงาน 3" value="key2" />
              <Picker.Item label="หน่วยงาน 4" value="key3" />
              <Picker.Item label="หน่วยงาน 5" value="key4" />
            </Picker>
          </Right>
        </Header>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <ScrollView horizontal={true}>
              <Card style={{ width: (w*0.85), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#81d4fa" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>ศุกร์ 2 (วันนี้)</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                {
                  patients.filter((patient) => {
                    return patient.braden < 23
                  }).map((patient) => {
                    return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)
                  })
                }
                </List>
              </Card>

              <Card style={{ width: (w*0.85), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#b39ddb" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>เสาร์ 3</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                {
                  patients.filter((patient) => {
                    return patient.braden < 9
                  }).map((patient) => {
                    return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)
                  })
                }
                </List>
              </Card>

              <Card style={{ width: (w*0.85), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#e57373" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>อาทิตย์ 4</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                {
                  patients.filter((patient) => {
                    return patient.braden <= 6
                  }).map((patient) => {
                    return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)
                  })
                }
                </List>
              </Card>

              <Card style={{ width: (w*0.85), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#fff59d" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>จันทร์ 5</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                {
                  patients.filter((patient) => {
                    return patient.braden <= 6
                  }).map((patient) => {
                    return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)
                  })
                }
                </List>
              </Card>

              <Card style={{ width: (w*0.85), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#f48fb1" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>อังคาร 6</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                {
                  patients.filter((patient) => {
                    return patient.braden < 9
                  }).map((patient) => {
                    return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)
                  })
                }
                </List>
              </Card>

              <Card style={{ width: (w*0.85), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#a5d6a7" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>พุธ 7</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                {
                  patients.filter((patient) => {
                    return patient.braden <= 6
                  }).map((patient) => {
                    return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)
                  })
                }
                </List>
              </Card>

              <Card style={{ width: (w*0.85), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#ffcc80" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>พฤหัส 8</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                {
                  patients.filter((patient) => {
                    return patient.braden < 9
                  }).map((patient) => {
                    return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)
                  })
                }
                </List>
              </Card>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default CalendarTask