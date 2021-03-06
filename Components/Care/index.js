import React, { Component } from 'react'
import tasks from '../../Data/task'
import TaskListItem from '../Task/TaskListItem'
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
                        <View style={{ flexDirection: "row", flex: 12 }}>
                            <View style={{flex:9, flexDirection: "column"}}>
                                <Text style={{ 
                                    marginTop: "0%",
                                    flex: 1,
                                    fontSize: 25,
                                    fontWeight: 'bold'  
                                }}>Braden Score : 7</Text>
                                <Text style={{ 
                                    marginBottom: "1%",
                                    flex: 1,  
                                }}>(ประเมินล่าสุด 19/ม.ค./2562 - 11.00)</Text>
                            </View>
                            
                            <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                <Button primary onPress={ () => nav('Assessment')}>
                                    <Text>ประเมิน</Text>
                                </Button>
                            </View>
                        </View>
                    </CardItem>
                    
                    <CardItem>
                        <Left>
                            <Text style={{ fontSize: 21, fontWeight: 'bold'}}>
                                รายการงาน
                            </Text>
                        </Left>
                        <Body/>
                        <Right>
                            <Button  primary small bordered onPress={ () => nav('ChooseTask')} >
                                <Icon name="create"/>
                                {/* <Text>แก้ไข</Text> */}
                            </Button>
                        </Right>
                    </CardItem>
                    {
                        tasks.filter(function(task) {
                            return task.isCheck === true
                        }).map(task => {
                            return (
                                <TaskListItem task={task} />
                            )
                        })
                    }
                    
                    {/* <CardItem footer style={{ flex: 1}}>
                        <Body style={{ alignItems: 'flex-end' }}>
                            
                        </Body>
                    </CardItem> */}
                </Card>

                <Card>
                    <CardItem>
                        <Text style={{ fontSize: 21, fontWeight: 'bold'}}>
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
        )
    }
}

export default Care