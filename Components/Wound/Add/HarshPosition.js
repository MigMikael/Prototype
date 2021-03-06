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
  constructor() {
    super()
    this.state = {
      front: true
    }
  }

  handleFront = () => {
    this.setState({
      front: true
    })
  }

  handleBack = () => {
    this.setState({
      front: false
    })
  }

  handlePositionPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChoosePosition')
  }

  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content style={{ flexDirection: "column"}} centerContent>
          <View style={{ flexDirection: "row" }}>
            <Button warning full style={{ flex: 1 }} onPress={ this.handleFront }>
              <Text>หน้า</Text>
            </Button>
            <Button info full style={{ flex: 1 }} onPress={ this.handleBack }>
              <Text>หลัง</Text>
            </Button>
          </View>

          {
            this.state.front ? 
            <View style={{ flexDirection: "row", flex: 12 }}>
              <View style={{ flex: 7 }}>
                <Image source={ require('../../../assets/body_front.jpg') } resizeMode='contain' style={{ 
                  height: (h*0.7),
                  width: (w*0.55),
                }}/>
              </View>
              <View style={{ flex: 5 , marginTop: '11%', flexDirection: 'column'}}>
                <View style={{ marginBottom: '2%'}}>
                  <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                    <Text>2. Ear</Text>
                  </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>5. Shoulder</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>7. Ilac Crest</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>10. Trochanter</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>11. Knee</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>12. Melleolus</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>14. Tole</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{  alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>15. Other</Text>
                </Button>
                </View>
              </View>
            </View>
            :
            <View style={{ flexDirection: "row", flex: 12 }}>
              <View style={{ flex: 7 }}>
                <Image source={ require('../../../assets/body_back.jpg') } resizeMode='contain' style={{ 
                  height: (h*0.7),
                  width: (w*0.55),
                }}/>
              </View>
              <View style={{ flex: 5 , marginTop: '11%'}}>
                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>1. Occiput</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>3. Scapula</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>4. Spinous Process</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}></View>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>6. Elbow</Text>
                </Button>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>8. Sacrum/Coccyx</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>9. Ischial Tuberosity</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>13. Heel</Text>
                </Button>
                </View>

                <View style={{ marginBottom: '2%'}}>
                <Button primary rounded block style={{ alignSelf: 'flex-start', marginBottom: '0%'}} onPress={ this.handlePositionPress }>
                  <Text>15. Other</Text>
                </Button>
                </View>
              </View>
            </View>
          }
        </Content>
      </Container>
    )
  }
}

export default HarshPosition