import { createStackNavigator, createAppContainer } from 'react-navigation';
import Task from './home'
import CalendarTask from '../CalendarTask/index'

export default createStackNavigator({
  Task,
  CalendarTask
},
{
  initialRouteName: 'Task',
  headerMode: 'none'
})