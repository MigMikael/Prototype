import React, { Component } from 'react'
import LargeHeader from '../Header/LargeHeader'
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
    CheckBox,
    Badge
} from 'native-base';

export default class BradenDetail extends Component {
  constructor() {
    super()
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <LargeHeader hasTab={false} navigation={this.props.navigation}/>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem bordered>
              <Text style={{ fontWeight: 'bold'}}>ประวัติการประเมิน Braden วันที่ 02/ม.ค./2562</Text>
            </CardItem>
            <CardItem>
              <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Score : 13 </Text>
            </CardItem>
            <ListItem bordered>                      
              <Body style={{ flex: 9}}>
                <Text style={{ fontWeight: 'bold' }}>การรับรู้ : </Text>
                <Text>มี Pain stimuli แต่สื่อสารไม่ได้ </Text>
              </Body>
              <Right style={{ flex: 1 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>2</Text>
              </Right>
            </ListItem>

            <ListItem bordered>                      
              <Body style={{ flex: 9}}>
                <Text style={{ fontWeight: 'bold'}}>ความชื้นของผิวหนัง : </Text>
                <Text>เปียกชุ่มตลอด เปลี่ยนผ้า1ครั้ง/เวร</Text>
              </Body>
              <Right style={{ flex: 1 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>2</Text>
              </Right>
            </ListItem>

            <ListItem bordered>                      
              <Body style={{ flex: 9}}>
                <Text style={{ fontWeight: 'bold'}}>การมีกิจกรรม : </Text>
                <Text>เดินได้ระยะสั้นต้องพยุง</Text>
              </Body>
              <Right style={{ flex: 1 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>3</Text>
              </Right>
            </ListItem>

            <ListItem bordered>                      
              <Body style={{ flex: 9}}>
                <Text style={{ fontWeight: 'bold'}}>การเคลื่อนไหว : </Text>
                <Text>ต้องช่วยบ้าง ขะยบแขนขาได้</Text>
              </Body>
              <Right style={{ flex: 1 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>3</Text>
              </Right>
            </ListItem>

            <ListItem bordered>                      
              <Body style={{ flex: 9}}>
                <Text style={{ fontWeight: 'bold'}}>ภาวะโภชนาการ : </Text>
                <Text>NPO กินได้1/3ถาด(ทางปาก)</Text>
              </Body>
              <Right style={{ flex: 1 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>1</Text>
              </Right>
            </ListItem>

            <ListItem bordered>                      
              <Body style={{ flex: 9}}>
                <Text style={{ fontWeight: 'bold'}}>การเสียดสี : </Text>
                <Text>จัดท่าได้อย่างอิสระ</Text>
              </Body>
              <Right style={{ flex: 1 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>3</Text>
              </Right>
            </ListItem>
          </Card>

          <Card>
            <CardItem>
              <Text style={{ fontSize: 25, fontWeight: 'bold'}}>
                Criteria กลุ่มเสี่ยง 
              </Text>
            </CardItem>
            <ListItem bordered>
                <Icon active name='remove' style={{ color: "#000000"}} />
                <Body>
                  <Text>ไม่รู้สึกตัว / เป็นอัมพาต</Text>
                </Body>
            </ListItem>
            <ListItem bordered>
                <Icon active name='remove' style={{ color: "#000000"}} />
                <Body>
                  <Text>ถ่ายอุจจาระปัสสาวะราดบ่อยครั้ง</Text>
                </Body>
            </ListItem>
            <ListItem bordered>
                <Icon active name='remove' style={{ color: "#000000"}} />
                <Body>
                  <Text>ได้รับ Steroid ระยะยาว</Text>
                </Body>
            </ListItem>
          </Card>

          <Card>
            <CardItem>
              <Text style={{ fontSize: 25, fontWeight: 'bold'}}>
                สถานะผู้ป่วย
              </Text>
            </CardItem>
            <ListItem bordered>
              <Icon active name='remove' style={{ color: "#000000"}} />
              <Body>
                <Text>NG Tube</Text>
              </Body>
            </ListItem>
            <ListItem bordered>
              <Icon active name='remove' style={{ color: "#000000"}} />
              <Body>
                <Text>Retention suture</Text>
              </Body>
            </ListItem>
            <ListItem bordered>
              <Icon active name='remove' style={{ color: "#000000"}} />
              <Body>
                <Text>กลั้นอุจจาระและปัสสาวะไม่ได้</Text>
              </Body>
            </ListItem>
          </Card>
        </Content>
      </Container>
    )
  }
}