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

import img1 from '../../assets/foot_1.png'
import img2 from '../../assets/foot_2.png'
import img3 from '../../assets/foot_3.png'
import img4 from '../../assets/foot_4.png'
import img5 from '../../assets/foot_5.png'
import img6 from '../../assets/foot_6.png'

class WoundCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showCard: true
        }

        this.handlePress = this.handlePress.bind(this)
        this.handleLongPress = this.handleLongPress.bind(this)
    }

    componentDidMount() {
        this.setState({
            showCard: true
        })
    }

    handleLongPress() {
        // Alert.alert(
        //     'Alert Title',
        //     'My Alert Msg',
        //     [
        //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //       {
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel',
        //       },
        //       {text: 'OK', onPress: () => console.log('OK Pressed')},
        //     ],
        //     {cancelable: false},
        // );

        this.setState({
            showCard: false
        })
    }

    handlePress() {
        this.setState({
            showCard: true
        })
    }

    render() {
        const nav = this.props.nav
        const imgArray = [img1, img2, img3, img4, img5, img6]
        return(
          <Card>
            {
                this.state.showCard ? 
                    <CardItem button onPress={ () => nav('WoundDetail')} onLongPress={ this.handleLongPress } style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Left style={{ paddingRight: "2%" }}>
                            <Image source={ imgArray[this.props.image - 1] } style={{ height: 180, width: null , flex: 1 }} />
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
                :
                <TouchableOpacity onPress={ this.handlePress }>
                    <CardItem style={{
                        alignItems: 'center',
                        flexDirection: "row",
                        height: 180, width: null , flex: 1,
                        justifyContent:'center'
                    }}>
                        <Button info style={{ flex: 1, justifyContent: 'center' }}>
                            <Text>ลบ</Text>
                        </Button>
                        {
                            this.props.history? 
                                null
                            :
                            <Button primary style={{ flex: 1, justifyContent: 'center' }}>
                                <Text>จำหน่าย</Text>
                            </Button>
                        }
                    </CardItem>
                </TouchableOpacity>
            }
          </Card>
        )
    }
}

export default WoundCard