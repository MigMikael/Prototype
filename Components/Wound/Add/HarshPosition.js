import React, { Component } from 'react'
import SmallHeader from '../../Header/SmallHeader'
import { Image, ImageBackground, Dimensions } from 'react-native'
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
} from 'native-base'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class HarshPosition extends Component {

  handlePositionPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChoosePosition')
  }

  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content style={{ flexDirection: "column"}} centerContent>
          <View style={{ flexDirection: "row", marginBottom: "10%" }}>
            <Button warning full style={{ flex: 1 }}>
              <Text>หน้า</Text>
            </Button>
            <Button info full style={{ flex: 1 }}>
              <Text>หลัง</Text>
            </Button>
          </View>
          <ImageBackground source={ require('../../../assets/human_body_front.png') } style={{ 
            height: (h * 0.8), 
            width: (w * 0.78),
            alignSelf: 'center'
          }}>
            <Button primary rounded style={{ alignSelf: 'flex-end'}} onPress={ this.handlePositionPress }>
              <Text>1</Text>
            </Button>

            <Button primary rounded style={{ alignSelf: 'flex-end'}}>
              <Text>2</Text>
            </Button>

            <Button primary rounded style={{ alignSelf: 'flex-end'}}>
              <Text>3</Text>
            </Button>

            <Button primary rounded style={{ alignSelf: 'flex-end'}}>
              <Text>4</Text>
            </Button>
          </ImageBackground>
        </Content>
      </Container>
    )
  }
}

export default HarshPosition