import React, { Component } from 'react'
import tasks from '../../Data/task'
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
    CardItem,
    Card,
    Badge
} from 'native-base';

class Care extends Component {
    render() {
        const nav = this.props.nav
        return(
            <Content padder style={{ backgroundColor: "#e5e5e5" }}>
                <Card>
                    {/* <CardItem bordered>
                        <Text style={{ 
                            fontSize: 25,
                            fontWeight: "bold",
                            marginTop: "1%",
                            marginBottom: "1%" 
                        }}>งานประจำวัน</Text>
                    </CardItem> */}
                    
                    <CardItem bordered>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{flex:1, flexDirection: "column"}}>
                                <Text style={{ 
                                    marginTop: "0%",
                                    flex: 1,
                                    fontSize: 25,
                                    fontWeight: 'bold'  
                                }}>Braden Score : 18</Text>
                                <Text style={{ 
                                    marginBottom: "1%",
                                    flex: 1,  
                                }}>(19/ม.ค./2562 - 11.00)</Text>
                            </View>
                            
                            <Button primary style={{ flex: 0.3 }} onPress={ () => nav('Assessment')} >
                                <Text>ประเมิน</Text>
                            </Button>
                        </View>
                    </CardItem>
                    
                    <CardItem bordered>
                        <Text style={{ 
                            textDecorationLine: "underline",
                            marginTop: "1%",
                            marginBottom: "1%",
                            fontSize: 19,
                            fontWeight: 'bold'  
                        }}>รายการงาน</Text>
                    </CardItem>
                    {
                        tasks.filter(function(task) {
                            return task.isCheck === true
                        }).map(task => {
                            return (
                                <ListItem bordered>
                                    <Icon active name='add-circle' style={{ color: "#000000"}} />
                                    <Body>
                                        <Text>{task.name}</Text>
                                    </Body>
                                    {
                                        task.count > 0 ? 
                                        <Badge success>
                                            <Text>{task.count}</Text>
                                        </Badge>    
                                        : 
                                        <Badge danger>
                                            <Text>{task.count}</Text>
                                        </Badge>
                                    }
                                </ListItem>
                            )
                        })
                    }
                    
                    <CardItem footer style={{ flex: 1}}>
                        <Body style={{ alignItems: 'flex-end' }}>
                            <Button small primary onPress={ () => nav('ChooseTask')} >
                                <Text>แก้ไข</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem bordered>
                        <Text style={{ 
                            textDecorationLine: "underline",
                            marginTop: "1%",
                            marginBottom: "1%",
                            fontSize: 19,
                            fontWeight: 'bold'  
                        }}>สถานะผู้ป่วย</Text>
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
        )
    }
}

export default Care