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

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class CalendarTask extends Component {

  componentDidMount() {
    console.log('Search DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Search WILL UNMOUNT');
  }

  render() {
    const { navigation: { navigate }} = this.props
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
            <Title>Task</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem style={{ 
              flexDirection: "row",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0
            }}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined, flex: 1}}
                placeholder="Select your Department"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff">
                <Picker.Item label="หน่วยงาน 1" value="key0" />
                <Picker.Item label="หน่วยงาน 2" value="key1" />
                <Picker.Item label="หน่วยงาน 3" value="key2" />
                <Picker.Item label="หน่วยงาน 4" value="key3" />
                <Picker.Item label="หน่วยงาน 5" value="key4" />
              </Picker>
              <Button primary full style={{ flex: 0.35 }} onPress={ this.handleTodayPress }>
                <Text>วันนี้</Text>
              </Button>
              <Button info full style={{ flex: 0.35 }} onPress={ this.handleCalendarPress }>
                <Text>ปฏิทิน</Text>
              </Button>
            </CardItem>
          </Card>
          <ScrollView horizontal={true}>
              <Card style={{ width: (w*0.8), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#fff59d" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>Monday 1</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                  <SmallCard nav={ navigate } />
                  <SmallCard nav={ navigate } />
                  <SmallCard nav={ navigate } />
                </List>
              </Card>

              <Card style={{ width: (w*0.8), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#f48fb1" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>Tuesday 2</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                  <SmallCard nav={ navigate } />
                </List>
              </Card>

              <Card style={{ width: (w*0.8), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#a5d6a7" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>Wednesday 3</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                  <SmallCard nav={ navigate } />
                </List>
              </Card>

              <Card style={{ width: (w*0.8), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#ffcc80" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>Thursday 4</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                  <SmallCard nav={ navigate } />
                  <SmallCard nav={ navigate } />
                </List>
              </Card>

              <Card style={{ width: (w*0.8), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#81d4fa" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>Friday 5</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                  <SmallCard nav={ navigate } />
                </List>
              </Card>

              <Card style={{ width: (w*0.8), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#b39ddb" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>Saturday 6</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                  <SmallCard nav={ navigate } />
                </List>
              </Card>

              <Card style={{ width: (w*0.8), height: h }}>
                <CardItem header bordered style={{ backgroundColor: "#e57373" }}>
                  <Body>
                    <Text style={{ color: "#000000" }}>Sunday 7</Text>
                  </Body>
                  <Right>
                    <Text>(0/3)</Text>
                  </Right>
                </CardItem>
                <List>
                  <SmallCard nav={ navigate } />
                </List>
              </Card>
          </ScrollView>
        </Content>
      </Container>
    );
  }

  handleTodayPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('Task')
  }

  handleCalendarPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('CalendarTask')
  }
}

export default CalendarTask