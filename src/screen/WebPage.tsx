/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import WebView from 'react-native-webview';
import useWebPageStatus from '../hooks/useWebPageStatus';
import ErrorPage from '../components/error/ErrorPage';
import LoadingPage from '../components/loading/LoadingPage';

const WebPage = ({ route }: MaterialTopTabScreenProps<any, any>) => {
  //@ts-ignore
  const { url: uri } = route.params;
  const { isLoading, isError, onLoadProgress, onError } = useWebPageStatus();

  return (
    <>
      {isLoading ? <LoadingPage /> : null}
      {isError ? (
        <ErrorPage title="오류" description={isError.description} />
      ) : null}
      <WebView
        style={{ backgroundColor: 'transparent' }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        originWhitelist={['*']}
        source={{ uri }}
        onLoadProgress={onLoadProgress}
        onError={onError}
      />
    </>
  );
};

export default WebPage;
