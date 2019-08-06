import React, { Component } from 'react'
import LargeHeader from '../Header/LargeHeader'
import { Image, TouchableOpacity } from 'react-native'
import colors from '../../Data/color'
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

export default class TreatmentDetail extends Component {
  constructor() {
    super()
  }

  handleSeverityColor = (severity) => {
    let color = colors[severity]
    return color
  }

  render() {
    const { goBack } = this.props.navigation
    const severityColor = this.handleSeverityColor(1)
    return (
      <Container>
        <LargeHeader hasTab={false} navigation={this.props.navigation}/>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem bordered>
              <Text style={{ 
                fontWeight: 'bold'
              }}>ประวัติการประเมินแผลวันที่ 01/ม.ค./2562</Text>
            </CardItem>
            <CardItem style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              borderTopWidth: 20,
              borderTopColor: severityColor,
              borderRightWidth: 2,
              borderRightColor: severityColor,
              borderBottomWidth: 20,
              borderBottomColor: severityColor,
              borderLeftWidth: 2,
              borderLeftColor: severityColor
            }}>
              <Image source={ require('../../assets/wound_1.png') } resizeMode='contain' style={{ 
                width: '100%',
                height: undefined,
                aspectRatio: 1,
                borderTopWidth: 10,
                borderColor: severityColor
              }}/>
            </CardItem>
            <CardItem>
              <Text style={{ fontSize: 25, fontWeight: 'bold'}}>ลักษณะแผล</Text>
            </CardItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>Healing Score : 14</Text>
              </Body>
            </ListItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>ขนาดแผล</Text>
                <Text>กว้าง x ยาว : 0.2 x 0.2 cm</Text>
                <Text>ความลึกแผล : 0.2</Text>
                <Text>ปริมาณสารคัดหลั่ง : 25%</Text>
                <Text>พื้นแผล : Granulation</Text>
              </Body>
            </ListItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>โพรงแผล</Text>
                <Text>ตำแหน่งโพรงแผล : 12 นาฬิกา</Text>
                <Text>ความลึกโพรงแผล : 5 cm</Text>
              </Body>
            </ListItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>สาเหตุของการเกิดแผล</Text>
                <Text>PU Related Medical device</Text>
              </Body>
            </ListItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>ความรุนแรงของแผล</Text>
                <Text>ระดับที่ 2 มีการฉีกขาดของผิวหนังชั้นนอก</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <CardItem>
              <Text style={{ fontSize: 25, fontWeight: 'bold'}}>วิธีการทำแผล</Text>
            </CardItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>Cleansing Solution</Text>
                <Text>0.9% Normal saline solution</Text>
              </Body>
            </ListItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>Dressing</Text>
                <Text>1' Dressing: Gauze dressing</Text>
                <Text>2' Dressing: Hydrocolliod - Duoderm</Text>
                <Text>3' Dressing: Top dressing</Text>
              </Body>
            </ListItem>
            <ListItem bordered>                      
              <Body>
                <Text style={{ fontWeight: 'bold'}}>Adhersive</Text>
                <Text>Adhersive #2</Text>
              </Body>
            </ListItem>
          </Card>

          <Card>
            <CardItem>
              <Text style={{ fontSize: 25, fontWeight: 'bold'}}>หมายเหตุ</Text>
            </CardItem>
            <ListItem bordered>                      
              <Body>
                <Text>แผลมีแนวโน้มการหายที่ดี</Text>
              </Body>
            </ListItem>
          </Card>
        </Content>
      </Container>
    )
  }
}