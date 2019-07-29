import React, { Component } from 'react'
import SmallHeader from '../../Header/SmallHeader'
import { Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
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
  Accordion,
  View,
  Picker,
  List,
  ListItem,
  Thumbnail,
  CheckBox,
  Badge,
  Card,
  CardItem
} from 'native-base'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class ChoosePosition extends Component {

  handlePositionPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('AccuratePosition')
  }

  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content style={{ flex: 1 ,flexDirection: "column", backgroundColor: '#e5e5e5'}} padder>
          <Text style={{ fontSize: 21, fontWeight: 'bold' , width: "100%", marginTop: "10%", alignContent: 'center' }}>เลือกตำแหน่งของแผล</Text>
          {/* <TouchableOpacity onPress={ this.handlePositionPress }>
            <Image source={ require('../../../assets/body_part.png') } resizeMode="contain" style={{
              height: undefined,
              width: '100%',
              aspectRatio: 1
            }}/>
          </TouchableOpacity> */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity onPress={ this.handlePositionPress } style={{ flex: 1 }}>
              <Card >
                <Image source={ require('../../../assets/foot_1.png') } style={{ height: 180, width: null , flex: 1 }} />
              </Card>
            </TouchableOpacity>
            <Card style={{ flex: 1 }}>
              <Image source={ require('../../../assets/foot_2.png') } style={{ height: 180, width: null , flex: 1 }} />
            </Card>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Card style={{ flex: 1 }}>
              <Image source={ require('../../../assets/foot_3.png') } style={{ height: 180, width: null , flex: 1 }} />
            </Card>
            <Card style={{ flex: 1 }}>
              <Image source={ require('../../../assets/foot_4.png') } style={{ height: 180, width: null , flex: 1 }} />
            </Card>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Card style={{ flex: 1 }}>
              <Image source={ require('../../../assets/foot_5.png') } style={{ height: 180, width: null , flex: 1 }} />
            </Card>
            <Card style={{ flex: 1 }}>
              <Image source={ require('../../../assets/foot_6.png') } style={{ height: 180, width: null , flex: 1 }} />
            </Card>
          </View>
        </Content>
      </Container>
    )
  }
}

export default ChoosePosition