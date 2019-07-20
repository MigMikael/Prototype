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
    Card,
    CardItem
} from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

import { Dimensions } from 'react-native'

class Overview extends Component {
    render() {
        return(
            <Content padder style={{ backgroundColor: "#e5e5e5" }}>
                <Card>
                    <CardItem header>
                        <Text>Presure Ulcer Healing History</Text>
                    </CardItem>
                    <CardItem style={{
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "2%",
                        paddingBottom: "2%"
                    }}>
                        <LineChart
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                                datasets: [
                                    {
                                        data: [20, 45, 28, 80, 99, 43],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`
                                    },
                                    {
                                        data: [35, 40, 22, 75, 10, 50],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`
                                    },
                                    {
                                        data: [55, 67, 70, 90, 45, 23],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`
                                    },
                                ]
                            }}
                            width={ Dimensions.get('window').width * 0.9 } // from react-native
                            height={220}
                            yAxisLabel={'$'}
                            chartConfig={{
                                backgroundColor: '#1cc910',
                                backgroundGradientFrom: '#eff3ff',
                                backgroundGradientTo: '#efefef',
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>Braden Score History</Text>
                    </CardItem>
                    <CardItem style={{
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "2%",
                        paddingBottom: "2%"
                    }}>
                        <LineChart
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                                datasets: [{
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }]
                            }}
                            width={ Dimensions.get('window').width * 0.9 }
                            height={220}
                            yAxisLabel={'$'}
                            chartConfig={{
                                backgroundColor: '#1cc910',
                                backgroundGradientFrom: '#eff3ff',
                                backgroundGradientTo: '#efefef',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header bordered>
                        <Text>Braden Score : 13 (02/ม.ค./2562) </Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            การรับรู้ : 2    
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            ความชื้นของผิวหนัง : 1
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            การมีกิจกรรม : 3
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            การเคลื่อนไหว : 4 
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            ภาวะโภชนาการ : 3
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            การเสียดสี : 4
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>13/ม.ค./2562 (Braden Score : 13) </Text>
                    </CardItem>
                    <CardItem style={{
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "2%",
                        paddingBottom: "2%"
                    }}>
                        <BarChart
                            data={{
                                labels: [
                                    'รับรู้',
                                    'ความชื้น',
                                    'กิจกรรม',
                                    'เคลื่อนไหว',
                                    'โภชนาการ',
                                    'เสียดสี',
                                ],
                                datasets: [
                                    {
                                        data: [2, 1, 3, 4, 3, 4],
                                    },
                                ],
                            }}
                            width={ Dimensions.get('window').width * 0.9 }
                            height={250}
                            chartConfig={{
                                backgroundColor: '#1cc910',
                                backgroundGradientFrom: '#eff3ff',
                                backgroundGradientTo: '#efefef',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

export default Overview