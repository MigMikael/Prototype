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
              <Body>
                  <Text style={{ fontWeight: 'bold'}}>การรับรู้ : </Text>
                  <Text>มี Pain stimuli แต่สื่อสารไม่ได้ </Text>
              </Body>
              <Badge success>
                  <Text>2</Text>
              </Badge>
            </ListItem>

            <ListItem bordered>                      
              <Body>
                  <Text style={{ fontWeight: 'bold'}}>ความชื้นของผิวหนัง : </Text>
                  <Text>เปียกชุ่มตลอด เปลี่ยนผ้า1ครั้ง/เวร</Text>
              </Body>
              <Badge success>
                  <Text>2</Text>
              </Badge>
            </ListItem>

            <ListItem bordered>                      
              <Body>
                  <Text style={{ fontWeight: 'bold'}}>การมีกิจกรรม : </Text>
                  <Text>เดินได้ระยะสั้นต้องพยุง</Text>
              </Body>
              <Badge success>
                  <Text>3</Text>
              </Badge>
            </ListItem>

            <ListItem bordered>                      
              <Body>
                  <Text style={{ fontWeight: 'bold'}}>การเคลื่อนไหว : </Text>
                  <Text>ต้องช่วยบ้าง ขะยบแขนขาได้</Text>
              </Body>
              <Badge success>
                  <Text>3</Text>
              </Badge>
            </ListItem>

            <ListItem bordered>                      
              <Body>
                  <Text style={{ fontWeight: 'bold'}}>ภาวะโภชนาการ : </Text>
                  <Text>NPO กินได้1/3ถาด(ทางปาก)</Text>
              </Body>
              <Badge success>
                  <Text>1</Text>
              </Badge>
            </ListItem>

            <ListItem bordered>                      
              <Body>
                  <Text style={{ fontWeight: 'bold'}}>การเสียดสี : </Text>
                  <Text>จัดท่าได้อย่างอิสระ</Text>
              </Body>
              <Badge success>
                  <Text>3</Text>
              </Badge>
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
        </Content>
      </Container>
    )
  }
}