import React, { Component } from 'react'
import SmallHeader from '../Header/SmallHeader'
import * as Progress from 'react-native-progress';
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
    Card,
    CardItem,
    Label
} from 'native-base';

export default class WoundAssessment extends Component {
  constructor() {
    super()
    this.data = [
      { title: "ลักษณะของแผล", content: 1 },
      { title: "วิธีการทำแผล", content: 2 },
      { title: "หมายเหตุ", content: 3 },
    ]
  }

  renderAccordionContent = (section) => {
    let comp = null
    if (section.content === 1) {
      comp = (
        <View>
          <Text style={{ fontSize: 19, marginStart: '2%', marginTop: '2%', marginBottom: '2%', color: '#000000', fontWeight: 'bold'}}>1. ขนาดแผล</Text>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความกว้าง</Label>
            <Input value={"20"}/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความยาว</Label>
            <Input value={"20"}/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความลึก</Label>
            <Input value={"2"}/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>

          <Text style={{ fontSize: 19, marginStart: '2%', marginTop: '2%', marginBottom: '2%', color: '#000000', fontWeight: 'bold'}}>2. โพรงใต้ผิวหนัง</Text>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความลึก</Label>
            <Input value={"2"}/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>
        </View>
      )
    } else if (section.content === 2) {
      comp = (
        <View>
          <Item>
            <Input placeholder="Field 1" />
          </Item>
          <Item last>
            <Input placeholder="Field 2" />
          </Item>
        </View>
      )
    } else if (section.content === 3) {
      comp = (
        <View>
          <Item>
            <Input placeholder="Field 1" />
          </Item>
          <Item last>
            <Input placeholder="Field 2" />
          </Item>
        </View>
      )
    }
    return comp
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('PatientDetail', {
      message: "add wound success"
    })
  }

  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <Form style={{ backgroundColor: "#ffffff" }}>
              <Accordion 
                expanded={0}
                dataArray={ this.data } 
                headerStyle={{ backgroundColor: "#81c784" }}
                renderContent={ this.renderAccordionContent } />  
            </Form>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Button dark onPress={ this.handleNextPress }>
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