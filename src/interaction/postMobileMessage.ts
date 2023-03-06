// auth-session
// auth-student
// device-darkmode

type RNMessageConverterType = 'auth' | 'storage' | 'device' | 'web';
type RNMessageConverterAction =
  | 'session'
  | 'student'
  | 'darkmode'
  | 'ready'
  | 'error';

export const rnMessageConverter = (key: string, bringCurrentData: any) => {
  const [type, action] = key.split('-');

  if (!type || !action) {
    return JSON.stringify({});
  }

  let result: {
    type: RNMessageConverterType;
    action: RNMessageConverterAction;
    message: any;
  } = {
    type: type as RNMessageConverterType,
    action: action as RNMessageConverterAction,
    message: {},
  };

  switch (type) {
    case 'auth':
      if (action === 'all') {
        result.message = {
          ...bringCurrentData.authorize,
          ...bringCurrentData.student,
        };
      }
      if (action === 'session') {
        result.message = bringCurrentData.authorize;
      }
      if (action === 'student') {
        result.message = bringCurrentData.student;
      }
      break;
    case 'device':
      if (action === 'darkmode') {
        result.message = bringCurrentData.isDarkMode;
      }
      break;
    case 'web':
      if (action === 'ready' || action === 'error') {
        result.message = bringCurrentData.session;
      }
    default:
      break;
  }

  return JSON.stringify(result);
};
