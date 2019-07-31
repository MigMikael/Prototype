import React, { Component } from 'react'
import BradenCard from './BradenCard'
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
import bradens from '../../Data/braden'

class Overview extends Component {
    render() {
        const nav = this.props.nav
        return(
            <Content padder style={{ backgroundColor: "#e5e5e5" }}>
                <Card>
                    <CardItem header>
                        <Text style={{ fontWeight: 'bold', fontSize: 21 }}>Presure Ulcer Healing History</Text>
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
                        <Text style={{ fontWeight: 'bold', fontSize: 21 }}>Braden Score History</Text>
                    </CardItem>
                    <CardItem style={{
                        paddingLeft: "2%",
                        paddingRight: "2%",
                        paddingTop: "2%",
                        paddingBottom: "2%"
                    }}>
                        <LineChart
                            data={{
                                labels: ['02/ม.ค.', '03/ม.ค.', '04/ม.ค.', '05/ม.ค.', '06/ม.ค.', '07/ม.ค.'],
                                datasets: [{
                                    data: [20, 45, 28, 80, 99, 43]
                                }]
                            }}
                            width={ Dimensions.get('window').width * 0.9 }
                            height={220}
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
                { bradens.map((braden) => {
                    return (
                        <BradenCard braden={braden} nav={nav} key={braden.id}/>
                    )
                })}
                </Card>
            </Content>
        )
    }
}

export default Overview