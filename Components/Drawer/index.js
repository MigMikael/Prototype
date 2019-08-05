import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Login from '../Login/index';
import Search from '../Search/index';
import Task from '../Task/index';
import Setting from '../Setting/index';
import CalendarTask from '../CalendarTask/index'

const AppNavigator = createDrawerNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      drawerLabel: 'ค้นหาผู้ป่วย'
    }
  },
  Task: {
    screen: Task,
    navigationOptions: {
      drawerLabel: 'งานวันนี้'
    }
  },
  CalendarTask: {
    screen: CalendarTask,
    navigationOptions: {
      drawerLabel: 'ปฎิทินงาน'
    }
  }, 
  Setting: {
    screen: Setting,
    navigationOptions: {
      drawerLabel: 'ตั้งค่า'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'ออกจากระบบ'
    }
  },
},
{
  initialRouteName: 'Search',
});

export default createAppContainer(AppNavigator);