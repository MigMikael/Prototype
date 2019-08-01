import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
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
    Card,
    CardItem,
    Badge
} from 'native-base';

class HistoryCard extends Component {
    handleSeverityColor = (severity) => {
        let color = ""
        if (severity === 1) {
            color = '#ec407a'
        } else if (severity === 2) {
            color = '#d50000'
        } else if (severity === 3) {
            color = '#ffeb3b'
        } else if (severity === 4) {
            color = '#1b5e20'
        } else if (severity === 5) {
            color = '#4a148c'
        } else {
            color = '#000000'
        }
        return color
      }

    render() {
        const severityColor = this.handleSeverityColor(1)
        return(
            <Card>
                <CardItem button onLongPress={ this.handleLongPress } style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                    <Left style={{ paddingRight: "2%", borderRightWidth: 1, borderRightColor: "#e5e5e5" }}>
                        <Image source={ require('../../assets/wound_1.png') } style={{ height: 180, width: null , flex: 1 }} />
                    </Left>
                    <Right style={{ 
                        alignItems: "flex-start",
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Text style={{ 
                            fontSize: 17,
                            fontWeight: 'bold', 
                            lineHeight: 25 
                        }}>Healing Score : 14</Text>
                        <Text style={{ fontWeight: 'bold', lineHeight: 25 }}>วันที่ 01/ม.ค./2562</Text>
                        <Text style={{ lineHeight: 25 }}>Healing Score : 14</Text>
                        <Text style={{ lineHeight: 25 }}>กว้าง x ยาว : 0.2 x 0.2</Text>
                        <Text style={{ lineHeight: 25 }}>ปริมาณสารคัดหลั่ง : 25%</Text>
                        <Text style={{ lineHeight: 25 }}>พื้นแผล : Granulation</Text>
                    </Right>
                    <View style={{
                        height: 180,
                        borderLeftWidth: 12,
                        borderLeftColor: severityColor,
                    }}/>
                </CardItem>
            </Card>
        )
    }
}

export default HistoryCard