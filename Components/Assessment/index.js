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
    Label,
    Radio
} from 'native-base';

export default class Setting extends Component {
  constructor() {
    super()
    this.data = [
      { title: "ข้อมูลส่วนบุคคล", content: 1 },
      { title: "ประเมินการรับรู้", content: 2 },
      { title: "ประเมินความเปียกชื้นของผิวหนัง", content: 3 },
      { title: "ประเมินการมีกิจกรรม", content: 4 },
      { title: "ประเมินการเคลื่อนไหว", content: 5 },
      { title: "ประเมินภาวะโภชนาการ", content: 6 },
      { title: "การเสียดสี", content: 7 }
    ]
    this.state = {
      totalScore: 0,
      groupScore: [0, 0, 0, 0, 0, 0],
    }
    this.handleRadioPress = this.handleRadioPress.bind(this)
  }

  handleRadioPress(group, value) {
    this.setState(prevState => {
      const newList = prevState.groupScore
      newList[group] = value

      const arrSum = arr => arr.reduce((a,b) => a + b, 0)

      return {
        totalScore: arrSum(newList),
        groupScore: newList,
      }
    })
  }

  renderAccordionContent = (section) => {
    let comp = null
    if (section.content === 1) {
      comp = (
        <View>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>AN</Label>
            <Input value={"0958029-1"}/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>HN</Label>
            <Input value={"001304-53"}/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold' }}>ชื่อ-สกุล</Label>
            <Input value={"พีรวิชญ์ อรรถชิตสถาพร"}/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold' }}>หอผู้ป่วย</Label>
            <Input value={"ตึก 2008 พิเศษ 8 ก."}/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold' }}>สิทธิค่ารักษาพยาบาล</Label>
            <Input/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold' }}>วันที่ Admit</Label>
            <Input/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold' }}>วันที่รับย้าย</Label>
            <Input/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold' }}>วินิจฉัยโรค</Label>
            <Input/>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold' }}>พบแผลกดทับแรกรับ</Label>
            <Input/>
          </Item>
        </View>
      )
    } else if (section.content === 2) {
      comp = (
        <View>
          <ListItem onPress={() => this.handleRadioPress(0, 1)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[0] === 1}/>
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>1. ไม่ตอบสนอง</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(0, 2)} >
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[0] === 2}/>
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>2. มี Pain stimuli แต่สื่อสารไม่ได้</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(0, 3)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[0] === 3} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>3. สับสน/สื่อสารไม่ได้ทุกครั้ง</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(0, 4)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[0] === 4} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>4. ปกติ</Text>
            </Body>
            <Right/>
          </ListItem>
        </View>
      )
    } else if (section.content === 3) {
      comp = (
        <View>
          <ListItem onPress={() => this.handleRadioPress(1, 1)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[1] === 1} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>1. เปียกชุ่มตลอด เปลี่ยนผ้า>1ครั้ง/เวร</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(1, 2)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[1] === 2} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>2. เปลี่ยนผ้า 1 ครั้ง/เวร /ทุกครั้งที่พลิกตัว</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(1, 3)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[1] === 3} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>3. เปลี่ยนผ้า 1 ครั้ง/วัน</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(1, 4)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[1] === 4}/>
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>4. ไม่เปียก</Text>
            </Body>
            <Right/>
          </ListItem>
        </View>
      )
    } else if (section.content === 4) {
      comp = (
        <View>
          <ListItem onPress={() => this.handleRadioPress(2, 1)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[2] === 1} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>1. อยู่บนเตียงตลอด</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(2, 2)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[2] === 2} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>2. ทรงตัวไม่อยู่ ใช้รถเข็น</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(2, 3)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[2] === 3} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>3. เดินได้ระยะสั้น ต้องพยุง</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(2, 4)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[2] === 4} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>4. ปกติ</Text>
            </Body>
            <Right/>
          </ListItem>
        </View>
      )
    } else if (section.content === 5) {
      comp = (
        <View>
          <ListItem onPress={() => this.handleRadioPress(3, 1)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[3] === 1} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>1. เปลี่ยนท่าเองไม่ได้</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(3, 2)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[3] === 2} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>2. เปลี่ยนท่าเองได้น้อง ต้องช่วยบ่อย</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem  onPress={() => this.handleRadioPress(3, 3)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[3] === 3} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>3. ต้องช่วยบ้าง ขยับแขนขาได้</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(3, 4)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[3] === 4} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>4. ปกติ</Text>
            </Body>
            <Right/>
          </ListItem>
        </View>
      )
    } else if (section.content === 6) {
      comp = (
        <View>
          <ListItem onPress={() => this.handleRadioPress(4, 1)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[4] === 1} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>1. NPO กินได้1/3ถาด(ทางปาก)</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(4, 2)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[4] === 2} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>2. Feedได้บ้าง งดFeedบางมื้อ กินได้1/2ถาด</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(4, 3)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[4] === 3} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>3. Feedได้หมด กินได้>1/2</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(4, 4)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[4] === 4} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>4. ปกติ</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem>
            <Body style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>ผลการประเมินด้วยระบบ NAF</Text>
              <Text>Severe Malnutrition ( >= 11 คะแนน)</Text>
            </Body>
          </ListItem>
        </View>
      )
    } else if (section.content === 7) {
      comp = (
        <View>
          <ListItem onPress={() => this.handleRadioPress(5, 1)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[5] === 1} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>1. ข้อกล้ามเนื้อหดเกร็ง ช่วยจัดท่าทุกครั้ง</Text>
            </Body>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(5, 2)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[5] === 2} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>2. เสี่ยงเสียดสีขณะเคลื่อนย้าย เปลี่ยนท่าลื่นไถลได้ง่าย</Text>
            </Body>
          </ListItem>
          <ListItem onPress={() => this.handleRadioPress(5, 3)}>
            <Left style={{ flex: 1 }}>
              <Radio selected={this.state.groupScore[5] === 3} />
            </Left>
            <Body style={{ flex: 9 }}>
              <Text>3. จัดท่าได้เองอย่างอิสระ</Text>
            </Body>
          </ListItem>
        </View>
      )
    }
    return comp
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
          <Card>
            <Form style={{ backgroundColor: "#ffffff" }}>
              <Accordion 
                expanded={0}
                dataArray={ this.data } 
                headerStyle={{ backgroundColor: "#81c784", fontWeight: 'bold', fontSize: 21 }}
                renderContent={ this.renderAccordionContent } />
            </Form>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Braden Score = {this.state.totalScore}</Text>
              </Body>
            </CardItem>
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