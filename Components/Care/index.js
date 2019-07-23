import React, { Component } from 'react'
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
    Card
} from 'native-base';

class Care extends Component {
    render() {
        const nav = this.props.nav
        return(
            <Content padder style={{ backgroundColor: "#e5e5e5" }}>
                <Card>
                    <CardItem bordered>
                        <Text style={{ 
                            fontSize: 30,
                            fontWeight: "bold",
                            marginTop: "4%",
                            marginBottom: "4%" 
                        }}>งานประจำวัน</Text>
                    </CardItem>
                    
                    <CardItem bordered>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ 
                                marginTop: "2%",
                                marginBottom: "2%",
                                flex: 1  
                            }}>Braden Score : 18 (17/07/2562)</Text>
                            <Button primary small style={{ flex: 0.3 }} onPress={ () => nav('Assessment')} >
                                <Text>ประเมิน</Text>
                            </Button>
                        </View>
                    </CardItem>
                    
                    <CardItem bordered>
                        <Text style={{ 
                            textDecorationLine: "underline",
                            marginTop: "2%",
                            marginBottom: "2%",
                            fontSize: 20  
                        }}>รายการงาน</Text>
                    </CardItem>

                    <ListItem bordered>
                        <CheckBox checked={true} color="green"/>
                        <Body>
                            <Text>Daily Stand Up</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} color="green"/>
                        <Body>
                            <Text>Discussion with Client</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} color="green"/>
                        <Body>
                            <Text>Finish list Screen</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} color="green"/>
                        <Body>
                            <Text>Finish list Screen</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} color="green"/>
                        <Body>
                            <Text>Finish list Screen</Text>
                        </Body>
                    </ListItem>
                    <CardItem footer>
                        <Body style={{ paddingStart: "30%", paddingEnd: "30%" }}>
                            <Button primary block>
                                <Text>Edit</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

export default Care