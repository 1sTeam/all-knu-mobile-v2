import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import WebView from 'react-native-webview';
import { useRecoilValue } from 'recoil';
import { rnMessageConverter } from '../interaction/postMobileMessage';
import { studentState } from '../store/student';
import useAuth from './useAuth';
import useUserDeviceSetting from './useUserDeviceSetting';

const useWebViewInteraction = () => {
  const ref = useRef<WebView>(null);

  const [command, setMessage] = useState<string>('');
  const newMessage = (msg: string) => setMessage(msg);
  const resetMessage = () => setMessage('');

  const navigation = useNavigation();

  const { authorize } = useAuth();
  const { isDarkMode } = useUserDeviceSetting();
  const student = useRecoilValue(studentState);
  const injectedJavaScript = `
  (function() { 
    setTimeout(() => {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "status", action: "ready", message: "webview has been activated! Ready for connection with app."}));
    }, 1000)
  })();true;`;

  const refreshWebView = () => {
    ref.current?.reload();
  };

  useEffect(() => {
    if (command !== '') {
      const { action, message } = JSON.parse(command);
      let temp = { key: '', data: {} };
      switch (action) {
        case 'ready':
          temp.key = 'auth-all';
          temp.data = { authorize, student, isDarkMode };
          break;
        case 'dialog':
          navigation.navigate('Dialog');
          break;
        case 'modal':
          navigation.navigate('Modal', message);
          break;
        case 'website':
          navigation.navigate('ExternalWebPage', message);
          break;
        case 'navigate':
          navigation.navigate(message.name, message.params);
          break;
        case 'console':
          console.log(message);
          break;
        case 'error':
          break;
        default:
          break;
      }

      if (temp.key !== '') {
        ref.current?.postMessage(rnMessageConverter(temp.key, temp.data));
      }
      resetMessage();
    }
  }, [command]);

  return {
    webRef: ref,
    injectedJavaScript,
    newMessage,
    resetMessage,
    refreshWebView,
  };
};

export default useWebViewInteraction;
