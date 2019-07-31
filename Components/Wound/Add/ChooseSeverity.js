import React, { Component,  } from 'react'
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
  CardItem,
  Card
} from 'native-base'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

const styles = {
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70/2,
  },
  text: {
    paddingStart: "3%",
  }
}

class ChooseSeverity extends Component {

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('WoundAssessment')
  }

  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content padder style={{ flex: 1, flexDirection: "column", backgroundColor: "#e5e5e5"}}>
          <Card style={{ height: (h*0.8), marginLeft:0, marginRight:0, paddingLeft:0, paddingRight:0 }}>
            <CardItem bordered style={{ flexDirection: 'column'}}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>ความรุนแรงของแผล</Text>
            </CardItem>
            
            <TouchableOpacity onPress={ this.handleNextPress } style={{ flex: 2 }}>
              <CardItem bordered style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#ec407a', ...styles.circle }} />
                <Text style={styles.text}>
                ระดับที่ 1 บริเวณที่ถูกกดทับจะเป็นรอยแดง
                </Text>
              </CardItem>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ this.handleNextPress } style={{ flex: 2 }}>
              <CardItem bordered style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#d50000', ...styles.circle }} />
                <Text style={styles.text}>
                ระดับที่ 2 มีการฉีกขาดของผิวหนังชั้นนอก
                </Text>
              </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.handleNextPress } style={{ flex: 2 }}>
              <CardItem bordered style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#ffeb3b', ...styles.circle }} />
                <Text style={styles.text}>
                ระดับที่ 3 เกิดแผลลึกถึงชั้นใต้ผิวหนัง
                </Text>
              </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.handleNextPress } style={{ flex: 2 }}>
              <CardItem bordered style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#1b5e20', ...styles.circle }} />
                <Text style={styles.text}>
                ระดับที่ 4 มีการตายของเนื้อเยื่อ 
                </Text>
              </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.handleNextPress } style={{ flex: 2 }}>
              <CardItem bordered style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#4a148c', ...styles.circle }} />
                <Text style={styles.text}>
                การบาดเจ็บของเนื้อเยื่อส่วนลึก
                </Text>
              </CardItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.handleNextPress } style={{ flex: 2 }}>
              <CardItem bordered style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#000000', ...styles.circle }} />
                <Text style={styles.text}>
                ไม่สามารถประเมินระดับได้
                </Text>
              </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Body>
                <Button dark block onPress={ this.handleNextPress }>
                  <Text>ต่อไป</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default ChooseSeverity