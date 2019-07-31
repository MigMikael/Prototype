import React, { Component } from 'react'
import SmallHeader from '../Header/SmallHeader'
import cleansingSolutions from '../../Data/cleansingSolution'
import firstDressings from '../../Data/firstDressing'
import secondDressings from '../../Data/secondDressing'
import thirdDressings from '../../Data/thridDressing'
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
    Textarea
} from 'native-base';

export default class WoundAssessment extends Component {
  constructor() {
    super()
    this.data = [
      { title: "ลักษณะของแผล", content: 1 },
      { title: "วิธีการทำแผล", content: 2 },
      { title: "หมายเหตุ", content: 3 },
    ]

    this.state = {
      width: 0,
      height: 0,
      depth: 0,
      holeDepth: 0,
      holePosition: 0,
      exudate: 0,
      woundBed: 0,
      healingScore: 0,
    }
  }

  handleText = () => {

  }

  handleDepth = (e) => {
    this.setState({
      depth: e
    })
  }

  handleHoleDepth = (e) => {
    this.setState({
      holeDepth: e
    })
  }

  handleHolePosition = (e) => {
    this.setState({
      holePosition: e
    })
  }

  handleWidth = (e) => {
    let newWidth = e
    this.setState(prevState => {
      let newScore = this.calculateScore(newWidth, prevState.height, prevState.exudate, prevState.woundBed)
      return {
        width: newWidth,
        height: prevState.height,
        depth: prevState.depth,
        holeDepth: prevState.holeDepth,
        holePosition: prevState.holePosition,
        exudate: prevState.exudate,
        woundBed: prevState.woundBed,
        healingScore: newScore,
      }
    })
  }

  handleHeight = (e) => {
    let newHeight = e
    this.setState(prevState => {
      let newScore = this.calculateScore(prevState.width, newHeight, prevState.exudate, prevState.woundBed)
      return {
        width: prevState.width,
        height: newHeight,
        depth: prevState.depth,
        holeDepth: prevState.holeDepth,
        holePosition: prevState.holePosition,
        exudate: prevState.exudate,
        woundBed: prevState.woundBed,
        healingScore: newScore,
      }
    })
  }

  handleExudate = (value) => {
    let newExudate = value
    this.setState(prevState => {
      let newScore = this.calculateScore(prevState.width, prevState.height, newExudate, prevState.woundBed)
      return {
        width: prevState.width,
        height: prevState.height,
        depth: prevState.depth,
        holeDepth: prevState.holeDepth,
        holePosition: prevState.holePosition,
        exudate: newExudate,
        woundBed: prevState.woundBed,
        healingScore: newScore,
      }
    })
  }

  onValueChange = (value) => {
    let newWoundBed = value
    this.setState(prevState => {
      let newScore = this.calculateScore(prevState.width, prevState.height, prevState.exudate, newWoundBed)
      return {
        width: prevState.width,
        height: prevState.height,
        depth: prevState.depth,
        holeDepth: prevState.holeDepth,
        holePosition: prevState.holePosition,
        exudate: prevState.exudate,
        woundBed: newWoundBed,
        healingScore: newScore,
      }
    })
  }

  calculateScore = (width, height, exudate, woundBed) => {
    let area = width * height
    let areaScore = 0
    if (area > 24.0) {
      areaScore = 10
    } else if (area > 12.0) {
      areaScore = 9
    } else if (area > 8.0) {
      areaScore = 8
    } else if (area > 4.0) {
      areaScore = 7
    } else if (area > 3.0) {
      areaScore = 6
    } else if (area > 2.0) {
      areaScore = 5
    } else if (area > 1.0) {
      areaScore = 4
    } else if (area > 0.6) {
      areaScore = 3
    } else if (area > 0.3) {
      areaScore = 2
    } else if (area > 0) {
      areaScore = 1
    } else {
      areaScore = 0
    }

    // let exudateScore = 0
    // if (exudate > 75) {
    //   exudateScore = 3
    // } else if ( exudate > 25) {
    //   exudateScore = 2
    // } else if ( exudate > 0) {
    //   exudateScore = 1
    // } else {
    //   exudateScore = 0
    // }

    return areaScore + exudate + woundBed
  }

  renderAccordionContent = (section) => {
    let comp = null
    const style = {
      subSectionHeader: {
        fontSize: 19, 
        marginStart: '2%', 
        marginTop: '2%', 
        marginBottom: '2%', 
        color: '#000000', 
        fontWeight: 'bold',
        textDecorationLine: "underline",
      }
    }

    if (section.content === 1) {
      comp = (
        <View>
          <Text style={ style.subSectionHeader }>1. ขนาดแผล</Text>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความกว้าง</Label>
            <Input 
              placeholder="ความกว้างแผล"
              value={this.state.width} 
              onChangeText={this.handleWidth}/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความยาว</Label>
            <Input
              placeholder="ความยาวแผล" 
              value={this.state.height} 
              onChangeText={ this.handleHeight }/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความลึก</Label>
            <Input
              placeholder="ความลึกแผล" 
              value={this.state.depth} 
              onChangeText={ this.handleDepth }/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>

          <Text style={ style.subSectionHeader }>2. โพรงใต้ผิวหนัง</Text>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ตำแหน่ง</Label>
            <Input
              placeholder="ตำแหน่งโพรงแผล" 
              value={this.state.holePosition} 
              onChangeText={ this.handleHolePosition }/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>นาฬิกา</Label>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000', fontWeight: 'bold'}}>ความลึก</Label>
            <Input
              placeholder="ความลึกโพรงแผล" 
              value={this.state.holeDepth} 
              onChangeText={ this.handleHoleDepth }/>
            <Label style={{ color: '#000000', fontWeight: 'bold'}}>cm</Label>
          </Item>

          <Text style={ style.subSectionHeader }>3. ปริมาณสิ่งคัดหลั่ง</Text>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined, flex: 1}}
            placeholder="เลือกลักษณะพื้นแผล"
            selectedValue={this.state.exudate}
            onValueChange={this.handleExudate}
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff">
            <Picker.Item label="0 %" value={0} />
            <Picker.Item label="< 25 %" value={1} />
            <Picker.Item label="25 - 75 %" value={2} />
            <Picker.Item label="> 75%" value={3} />
          </Picker>

          <Text style={ style.subSectionHeader }>4. ลักษณะพื้นแผล</Text>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined, flex: 1}}
            placeholder="เลือกลักษณะพื้นแผล"
            selectedValue={this.state.woundBed}
            onValueChange={this.onValueChange}
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff">
            <Picker.Item label="Closed" value={0} />
            <Picker.Item label="Epithelial Tissue" value={1} />
            <Picker.Item label="Granulation Tissue" value={2} />
            <Picker.Item label="Slough" value={3} />
            <Picker.Item label="Necrotic tissue" value={4} />
          </Picker>

          <Text style={{
            fontSize: 23, 
            marginStart: '2%', 
            marginTop: '4%', 
            marginBottom: '4%', 
            color: '#000000', 
            fontWeight: 'bold',
          }}>Pressure Ulcer Healing = {this.state.healingScore}</Text>
          {/* <Text>{this.state.width} {this.state.height} {this.state.exudate} {this.state.woundBed}</Text> */}
        </View>
      )
    } else if (section.content === 2) {
      comp = (
        <View>
          <Text style={ style.subSectionHeader }>1. Cleansing Solution</Text>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined, flex: 1}}
            placeholder="เลือก Cleansing Solution"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff">
            {
              cleansingSolutions.map(cleansing => {
                return(
                  <Picker.Item label={cleansing.name} value={cleansing.id} key={cleansing.id} />
                )
              })
            }
          </Picker>

          <Text style={ style.subSectionHeader }>2. Dressing</Text>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000'}}>1' Dressing</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined, flex: 1}}
              placeholder="เลือก 1' Dressing"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff">
              {
                firstDressings.map(fDressing => {
                  return(
                    <Picker.Item label={fDressing.name} value={fDressing.id} key={fDressing.id} />
                  )
                })
              }
            </Picker>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000'}}>2' Dressing</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined, flex: 1}}
              placeholder="เลือก 2' Dressing"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff">
              {
                secondDressings.map(sDressing => {
                  return(
                    <Picker.Item label={sDressing.name} value={sDressing.id} key={sDressing.id} />
                  )
                })
              }
            </Picker>
          </Item>
          <Item inlineLabel>
            <Label style={{ marginStart: '2%', color: '#000000'}}>3' Dressing</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined, flex: 1}}
              placeholder="เลือก 3' Dressing"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff">
              {
                thirdDressings.map(tDressing => {
                  return(
                    <Picker.Item label={tDressing.name} value={tDressing.id} key={tDressing.id} />
                  )
                })
              }
            </Picker>
          </Item>

          <Text style={ style.subSectionHeader }>3. Adhesive</Text>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined, flex: 1}}
            placeholder="เลือก Adhesive"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff">
            <Picker.Item label="Adhesive #1" value="" />
            <Picker.Item label="Adhesive #2" value="" />
            <Picker.Item label="Adhesive #3" value="" />
          </Picker>
        </View>
      )
    } else if (section.content === 3) {
      comp = (
        
            <Textarea rowSpan={5} bordered placeholder="หมายเหตุ" />
          
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