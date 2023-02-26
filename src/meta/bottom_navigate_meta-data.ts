import Home from '../page/Home';
import Notice from '../page/Notice';
import Program from '../page/Program';
import Setting from '../page/Setting';
import User from '../page/User';

export default [
  {
    name: 'Home',
    component: Home,
    korean: '홈',
    color: '#A988F2',
    icon: 'home-outline',
  },
  {
    name: 'User',
    component: User,
    korean: '종합정보시스템',
    color: '#F28891',
    icon: 'person-outline',
  },
  {
    name: 'Program',
    component: Program,
    korean: '비교과',
    color: '#5005F2',
    icon: 'newspaper-outline',
  },
  {
    name: 'Notice',
    component: Notice,
    korean: '공지',
    color: '#8350F2',
    icon: 'notifications-outline',
  },
  {
    name: 'Setting',
    component: Setting,
    korean: '설정',
    color: '#F2CA50',
    icon: 'ellipsis-horizontal-outline',
  },
];
