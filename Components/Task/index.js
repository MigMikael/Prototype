import { createStackNavigator, createAppContainer } from 'react-navigation';
import Scan from '../Scan/index'
import Patient from '../Patient/index'
import Task from '../Task/home'

export default createStackNavigator({
  Scan,
  Task,
  Patient
},
{
  initialRouteName: 'Task',
  headerMode: 'none'
})