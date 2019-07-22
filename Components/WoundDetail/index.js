import React, { Component } from 'react';
import HistoryCard from '../Wound/HistoryCard'
import * as Progress from 'react-native-progress';
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
  Tab, 
  Tabs,
  Thumbnail,
  View,
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
import Wound from '../Wound';

class WoundDetail extends Component {
  render() {
    const { navigation: { navigate }} = this.props
    const { goBack } = this.props.navigation
    return (
      <Container>
        <Header style={{ height: 90 }}>
          <Left style={{ flexDirection: 'row' }}>
            <Button transparent onPress={() => goBack()}>
              <Icon name='md-arrow-round-back' />
            </Button>
            <Thumbnail source={ require('../../assets/inpitar.jpg') } />
          </Left>
          <Body>
            <Title>นาย รักษา หายโดยไว</Title>
            <Text style={{
              color: "#ffffff",
              fontSize: 12,
              marginTop: "1%"
            }}>AN 0958029-1  AN 0958029-1  ตึก 2008 พิเศษ</Text>
            <View style={{ flexDirection: 'row', marginTop: "1%", paddingTop: '1%', paddingBottom: '1%' }}>
              <Text style={{ color: "#ffffff", fontSize: 12, paddingEnd: "1%" }}>20%</Text>
              <View style={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Progress.Bar progress={0.2} width={218} color={"#ffffff"}/>
              </View>
            </View>
          </Body>
        </Header>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
            <Card>
                <CardItem header>
                    <Text>Pressure Ulcer Healing History</Text>
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
                                ],
                                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})` 
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
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </CardItem>
            </Card>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
        </Content>
      </Container>
    );
  }
}

export default WoundDetail