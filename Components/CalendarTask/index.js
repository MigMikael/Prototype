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
  Picker
} from 'native-base';

import { ScrollView, Dimensions } from 'react-native'

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
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Task</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined, flex: 2 }}
            placeholder="Select your Department"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff">
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
          <View style={{ flexDirection: "row" }}>
            <Button primary style={{ flex: 1}} onPress={this.handleTodayPress}>
              <Text>Today</Text>
            </Button>
            <Button success style={{ flex: 1}} onPress={this.handleCalendarPress}>
              <Text>Calendar</Text>
            </Button>
          </View>
          <ScrollView horizontal={true}>
            <View padder style={{width: (w*0.8), height: h, backgroundColor: "#e5e5e5" }}>
              <View style={{ width: (w*0.8), height: h, backgroundColor: "#ffcca9" }}>
                <Text>Column1</Text>
              </View>
            </View>

            <View padder style={{width: (w*0.8), height: h, backgroundColor: "#e5e5e5" }}>
              <View style={{ width: (w*0.8), height: h, backgroundColor: "#64a56a" }}>
                <Text>Column2</Text>
              </View>
            </View>

            <View padder style={{width: (w*0.8), height: h, backgroundColor: "#e5e5e5" }}>
              <View style={{ width: (w*0.8), height: h, backgroundColor: "#6aa6d7" }}>
                <Text>Column3</Text>
              </View>
            </View>
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