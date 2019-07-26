import React, { Component } from 'react'
import LargeHeader from '../Header/LargeHeader'
import CriteriaGroup from './CriteriaGroup'
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

export default class Setting extends Component {
  constructor() {
    super()
    this.data = [
      { title: "ข้อมูลส่วนบุคคล", content: "Lorem ipsum dolor sit amet" },
      { title: "ประเมินการรับรู้", content: "Lorem ipsum dolor sit amet" },
      { title: "ประเมินความเปียกชื้นของผิวหนัง", content: "Lorem ipsum dolor sit amet" },
      { title: "ประเมินการมีกิจกรรม", content: "Lorem ipsum dolor sit amet" },
      { title: "ประเมินการเคลื่อนไหว", content: "Lorem ipsum dolor sit amet" },
      { title: "ประเมินภาวะโภชนาการ", content: "Lorem ipsum dolor sit amet" },
      { title: "การเสียดสี", content: "Lorem ipsum dolor sit amet" }
    ]
  }

  renderAccordionContent = () => {
    return (
      
        <Form style={{ backgroundColor: "#ffffff" }}>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
      
    )
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('CriteriaGroup')
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <LargeHeader hasTabs={false} navigation={this.props.navigation} />
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
            <Accordion 
              expanded={0}
              dataArray={ this.data } 
              headerStyle={{ backgroundColor: "#81c784" }}
              renderContent={ this.renderAccordionContent } />

            <Card>
              <CardItem>
                <Body>
                  <Text>Braden Score = 14</Text>
                </Body>
              </CardItem>
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