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
      { title: "ลักษณะของแผล", content: "Lorem ipsum dolor sit amet" },
      { title: "วิธีการทำแผล", content: "Lorem ipsum dolor sit amet" },
      { title: "หมายเหตุ", content: "Lorem ipsum dolor sit amet" },
    ]
  }

  renderAccordionContent = () => {
    return (
      <Form style={{ backgroundColor: "#ffffff" }}>
        <Item>
          <Input placeholder="Field 1" />
        </Item>
        <Item last>
          <Input placeholder="Field 2" />
        </Item>
      </Form>
    )
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
          <Accordion 
            expanded={0}
            dataArray={ this.data } 
            headerStyle={{ backgroundColor: "#81c784" }}
            renderContent={ this.renderAccordionContent } />
            <Card>
              <CardItem>
                <Button dark block onPress={ this.handleNextPress }>
                  <Text>ต่อไป</Text>
                </Button>
              </CardItem>
            </Card>
        </Content>
      </Container>
    )
  }
}