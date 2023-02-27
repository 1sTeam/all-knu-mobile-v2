import { useMemo, useState } from 'react';
import {
  WebViewProgressEvent,
  WebViewErrorEvent,
} from 'react-native-webview/lib/WebViewTypes';

interface IErrorStatus {
  code: number;
  description: string;
}

const useWebPageStatus = () => {
  const [loading, setLoading] = useState<number>(0);
  const [isError, setIsError] = useState<IErrorStatus | null>(null);

  const onLoadProgress = ({ nativeEvent }: WebViewProgressEvent) => {
    const { progress } = nativeEvent;
    setLoading(progress);
  };

  const onError = ({ nativeEvent }: WebViewErrorEvent) => {
    const { code } = nativeEvent;
    switch (code) {
      case -1100:
        setIsError({ code, description: '존재하지 않는 페이지입니다.' });
        break;
      case 401:
        setIsError({ code, description: '페이지 인증에 문제가 생겼습니다.' });
        break;
      default:
        setIsError({ code, description: '알 수 없는 오류가 생겼습니다.' });
        break;
    }
  };

  const isLoading = useMemo(
    () => (loading >= 0.1 && loading < 1.0 ? true : false),
    [loading],
  );

  return { isLoading, isError, onLoadProgress, onError };
};

export default useWebPageStatus;
