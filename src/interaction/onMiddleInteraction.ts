import { WebViewMessageEvent } from 'react-native-webview';

export const onMiddleInteraction = (
  e: WebViewMessageEvent,
  callback: (msg: string) => void,
) => {
  const message = e.nativeEvent.data;
  callback(message);
};
