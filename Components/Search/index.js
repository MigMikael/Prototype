import { createStackNavigator, createAppContainer } from 'react-navigation';
import Scan from '../Scan/index'
import Search from '../Search/home'
import Patient from '../Patient/index'

export default createStackNavigator({
    Search,
    Scan,
    Patient
},
{
    initialRouteName: 'Search',
    headerMode: 'none'
})