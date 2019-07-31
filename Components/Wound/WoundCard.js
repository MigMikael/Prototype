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

import img0 from '../../assets/inpitar.jpg'
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
        const nav = this.props.nav
        const imgArray = [img1, img2, img3, img4, img5, img6]
        const severityColor = this.handleSeverityColor(this.props.wound.severity)
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
                        <Left style={{ paddingRight: "2%", borderRightWidth: 1, borderRightColor: "#e5e5e5" }}>
                            <Image source={ imgArray[this.props.wound.image - 1] } style={{ height: 180, width: null , flex: 1 }} />
                        </Left>
                        <Right style={{ 
                            alignItems: "flex-start",
                            paddingLeft: "2%",
                            paddingRight: "2%",
                            paddingTop: 0,
                            paddingBottom: 0
                        }}>
                            {/* <Badge danger style={{ alignSelf: "flex-end" }}>
                                <Text>4</Text>
                            </Badge> */}
                            <Text style={{ 
                                fontSize: 17,
                                fontWeight: 'bold', 
                                lineHeight: 25 
                            }}>Healing Score : {this.props.wound.healingScore}</Text>
                            <Text style={{ lineHeight: 25 }}>วันที่ {this.props.wound.date}</Text>
                            <Text style={{ lineHeight: 25 }}>พื้นที่ : {this.props.wound.width} x {this.props.wound.height}</Text>
                            <Text style={{ lineHeight: 25 }}>สารคัดหลั่ง : {this.props.wound.exudate}</Text>
                            <Text style={{ lineHeight: 25 }}>พื้นแผล : {this.props.wound.woundBed}</Text>
                        </Right>
                        <View style={{
                            height: 180,
                            borderLeftWidth: 12,
                            borderLeftColor: severityColor,
                        }}/>
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