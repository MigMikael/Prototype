import React, { Component } from 'react'
import { Image, TouchableOpacity, Alert } from 'react-native'
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
    Badge,
} from 'native-base';

class WoundCard extends Component {

    handleLongPress() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }

    render() {
        const nav = this.props.nav
        return(
          <Card>
            <CardItem button onPress={ () => nav('WoundDetail')} onLongPress={ this.handleLongPress } style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                <Left style={{ paddingRight: "2%" }}>
                    <Image source={ require('../../assets/specific_body_part.png') } style={{ height: 180, width: null , flex: 1 }} />
                </Left>
                <Right style={{ 
                    alignItems: "flex-start",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                    <Badge danger style={{ alignSelf: "flex-end" }}>
                        <Text>4</Text>
                    </Badge>
                    <Text style={{ fontWeight: 'bold', lineHeight: 25 }}>วันที่ 01/ม.ค./2562</Text>
                    <Text style={{ lineHeight: 25 }}>Healing Score : 14</Text>
                    <Text style={{ lineHeight: 25 }}>กว้าง x ยาว : 0.2 x 0.2</Text>
                    <Text style={{ lineHeight: 25 }}>ปริมาณสารคัดหลั่ง : 7</Text>
                    <Text style={{ lineHeight: 25 }}>พื้นแผล : Granulation</Text>
                </Right>
            </CardItem>
            <CardItem style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        flexDirection: "row"
                    }}>
                    <Button full info small style={{ flex: 1 }}>
                        <Text>รายงาน</Text>
                    </Button>
                    <Button full primary small style={{ flex: 1 }}>
                        <Text>ประเมิน</Text>
                    </Button>
            </CardItem>
          </Card>
        )
    }
}

export default WoundCard