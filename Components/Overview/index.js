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
                                labels: ['02/ส.ค.', '03/ส.ค.', '04/ส.ค.', '05/ส.ค.', '06/ส.ค.', '07/ส.ค.'],
                                datasets: [
                                    {
                                        data: [2.0, 4.5, 2.8, 3.5, 4.2, 4.3],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`
                                    },
                                    {
                                        data: [3.5, 4.0, 2.2, 7.5, 1.0, 5.0],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`
                                    },
                                    {
                                        data: [5.5, 6.7, 7.0, 9.0, 4.5, 2.3],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`
                                    },
                                    {
                                        data: [1.4, 2.7, 5.0, 6.4, 2.1, 1.0],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(26, 35, 126, ${opacity})`
                                    },
                                    {
                                        data: [2.8, 3.7, 4.2, 5.5, 6.7, 7.9],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(245, 127, 23, ${opacity})`
                                    },{
                                        data: [4.0, 4.1, 4.5, 3.9, 4.2, 4.3],
                                        strokeWidth: 2,
                                        color: (opacity = 1) => `rgba(27, 94, 32, ${opacity})`
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
                                    borderRadius: 0
                                }
                            }}
                            style={{
                                marginVertical: 0,
                                borderRadius: 0
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
                                labels: ['02/ส.ค.', '03/ส.ค.', '04/ส.ค.', '05/ส.ค.', '06/ส.ค.', '07/ส.ค.'],
                                datasets: [{
                                    data: [9, 8, 7, 8, 10, 13],
                                    color: (opacity = 1) => `rgba(26, 35, 126, ${opacity})`
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
                                    borderRadius: 0
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 0,
                                borderRadius: 0
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