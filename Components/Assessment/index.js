import React, { Component } from 'react'
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

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <Header hasTabs style={{ height: 90 }}>
          <Left style={{ flexDirection: 'row' }}>
            <Button transparent onPress={() => goBack()}>
              <Icon name='md-arrow-round-back' />
            </Button>
            <Thumbnail source={ require('../../assets/inpitar.jpg') } />
          </Left>
          <Body>
            <Title>นาย รักษา หายโดยไว</Title>
            <Text style={{
              color: "#ffffff",
              fontSize: 12,
              marginTop: "1%"
            }}>AN 0958029-1  AN 0958029-1  ตึก 2008 พิเศษ</Text>
            <View style={{ flexDirection: 'row', marginTop: "1%", paddingTop: '1%', paddingBottom: '1%' }}>
              <Text style={{ color: "#ffffff", fontSize: 12, paddingEnd: "1%" }}>20%</Text>
              <View style={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Progress.Bar progress={0.2} width={218} color={"#ffffff"}/>
              </View>
            </View>
          </Body>
        </Header>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
            <Accordion 
              expanded={0}
              dataArray={ this.data } 
              headerStyle={{ backgroundColor: "#81c784" }}
              renderContent={ this.renderAccordionContent } />
        </Content>
      </Container>
    )
  }
}