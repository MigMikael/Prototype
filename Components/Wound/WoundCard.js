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
import colors from '../../Data/color'
import img0 from '../../assets/inpitar.jpg'
import img1 from '../../assets/foot_1_mark.png'
import img2 from '../../assets/foot_2_mark.png'
import img3 from '../../assets/foot_3_mark.png'
import img4 from '../../assets/foot_4_mark.png'
import img5 from '../../assets/foot_5_mark.png'
import img6 from '../../assets/foot_6_mark.png'

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
        if (this.props.history) {
            this.setState({
                showCard: true
            })
        } else {
            this.setState({
                showCard: false
            })
        }
    }

    handlePress() {
        this.setState({
            showCard: true
        })
    }

    handleSeverityColor = (severity) => {
        let color = colors[severity]
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
                    <CardItem button onPress={ () => nav('WoundDetail', {
                        history: this.props.history
                      })} onLongPress={ this.handleLongPress } style={{
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
                            paddingBottom: 0,
                            flexDirection: 'column'
                        }}>
                            <View style={{ flex: 1 , justifyContent: 'center'}}>
                                <Text style={{ 
                                    fontSize: 17,
                                    fontWeight: 'bold', 
                                    lineHeight: 25 
                                }}>Healing Score : {this.props.wound.healingScore}</Text>
                                <Text style={{ lineHeight: 25, fontWeight: 'bold' }}>
                                    วันที่ {this.props.wound.date}
                                </Text>
                            </View>
                            
                            <View style={{
                                width: "100%",
                                borderBottomColor: "#e5e5e5",
                                borderBottomWidth: 1,
                                marginTop: '2%',
                                marginBottom: 0
                            }}/>
                            {
                                this.props.history ?
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <Text style={{ lineHeight: 25, fontWeight: 'bold' }}>หมายเหตุ : </Text>
                                    <Text>{this.props.wound.remark}</Text>
                                </View> 
                                :
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <Text style={{ lineHeight: 25 }}>พื้นที่ : {this.props.wound.width} x {this.props.wound.height}</Text>
                                    <Text style={{ lineHeight: 25 }}>สารคัดหลั่ง : {this.props.wound.exudate}</Text>
                                    <Text style={{ lineHeight: 25 }}>พื้นแผล : {this.props.wound.woundBed}</Text>
                                </View>
                            }
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
                        flexDirection: 'column',
                        height: 180, width: null , flex: 1,
                        backgroundColor: "#f5f5f5"
                    }}>
                        <Button onPress={ this.handlePress } transparent style={{ 
                            flex: 1, 
                            alignSelf: 'flex-end'
                        }}>
                            <Icon name="close"/>
                        </Button>

                        <View style={{ flexDirection: 'row', flex: 2 }}>
                            <Button danger style={{ flex: 1, justifyContent: 'center' }}>
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
                        </View>
                    </CardItem>
                </TouchableOpacity>
            }
          </Card>
        )
    }
}

export default WoundCard