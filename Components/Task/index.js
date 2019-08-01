import { createStackNavigator, createAppContainer } from 'react-navigation';
import Task from './home'
import CalendarTask from '../CalendarTask/index'
import PatientDetail from '../Patient/PatientDetail'
import Assessment from '../Assessment/index'
import WoundDetail from '../WoundDetail/index'
import HarshPosition from '../Wound/Add/HarshPosition'
import ChoosePosition from '../Wound/Add/ChoosePosition'
import AccuratePosition from '../Wound/Add/AccuratePosition'
import ChoosePicture from '../Wound/Add/ChoosePicture'
import TakePicture from '../Wound/Add/TakePicture'
import ChooseCause from '../Wound/Add/ChooseCause'
import ChooseSeverity from '../Wound/Add/ChooseSeverity'
import WoundAssessment from '../Wound/WoundAssessment'
import CriteriaGroup from '../Assessment/CriteriaGroup'
import PatientAssessment from '../Assessment/PatientAssessment'
import ChooseTask from '../Task/ChooseTask'
import BradenDetail from '../Overview/BradenDetail'
import SkinAssessment from '../Assessment/SkinAssessment'
import TreatmentDetail from '../WoundDetail/TreatmentDetail'
import Scan from '../Scan/index'
import Search from '../Search/index'

export default createStackNavigator({
  Scan,
  Task,
  CalendarTask,
  PatientDetail,
  Assessment,
  WoundDetail,
  HarshPosition,
  ChoosePosition,
  AccuratePosition,
  ChoosePicture,
  TakePicture,
  ChooseCause,
  ChooseSeverity,
  WoundAssessment,
  CriteriaGroup,
  PatientAssessment,
  ChooseTask,
  BradenDetail,
  SkinAssessment,
  TreatmentDetail
},
{
  initialRouteName: 'Task',
  headerMode: 'none'
})