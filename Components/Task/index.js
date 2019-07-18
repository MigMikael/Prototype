import { createStackNavigator, createAppContainer } from 'react-navigation';
import Task from './home'
import CalendarTask from '../CalendarTask/index'
import PatientDetail from '../Patient/PatientDetail'

export default createStackNavigator({
  Task,
  CalendarTask,
  PatientDetail
},
{
  initialRouteName: 'Task',
  headerMode: 'none'
})