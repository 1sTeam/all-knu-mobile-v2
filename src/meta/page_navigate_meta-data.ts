export default {
  Home: [
    {
      name: 'main',
      korean: '메인',
      url: 'http://localhost:3000',
    },
    {
      name: 'announce',
      korean: '공지',
      url: 'http://localhost:3000/announcement',
    },
    {
      name: 'timetable',
      korean: '시간표',
      url: 'http://localhost:3000/timetable',
    },
    {
      name: 'maps',
      korean: '편의시설',
      url: 'http://localhost:3000/convenience',
    },
  ],
  User: [
    { name: 'score', korean: '성적', url: 'http://localhost:3000/score' },
    {
      name: 'scolarship',
      korean: '장학금',
      url: 'http://localhost:3000/scholarship',
    },
    {
      name: 'enrollment',
      korean: '등록금',
      url: 'http://localhost:3000/enrollment',
    },
  ],
  Program: [
    { name: 'main', korean: '메인', url: 'http://localhost:3000' },
    { name: 'reference', korean: '조회', url: 'http://localhost:3000/search' },
    {
      name: 'satisfy',
      korean: '만족도 조사',
      url: 'http://localhost:3000/survey',
    },
    {
      name: 'subscribe',
      korean: '구독',
      url: 'null',
      componentName: 'Notifications',
    },
  ],
  Notice: [
    { name: 'main', korean: '메인', url: null, componentName: 'Notifications' },
  ],
  Setting: [
    { name: 'main', korean: '메인', url: null, componentName: 'SettingScreen' },
  ],
};
