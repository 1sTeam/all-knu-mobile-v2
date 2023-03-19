/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import WebView from 'react-native-webview';
import useWebPageStatus from '../hooks/useWebPageStatus';
import ErrorPage from '../components/error/ErrorPage';
import LoadingPage from '../components/loading/LoadingPage';
import { onMiddleInteraction } from '../interaction/onMiddleInteraction';
import useWebViewInteraction from '../hooks/useWebViewInteraction';

const WebPage = ({ route }: MaterialTopTabScreenProps<any, any>) => {
  //@ts-ignore
  const { url: uri } = route.params;
  const { isLoading, isError, onLoadProgress, onError } = useWebPageStatus();
  const { webRef, injectedJavaScript, newMessage, refreshWebView } =
    useWebViewInteraction();

  return (
    <ScrollView
      contentContainerStyle={{ width: '100%', height: '100%' }}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refreshWebView} />
      }>
      {isLoading ? <LoadingPage /> : null}
      {isError ? (
        <ErrorPage title="오류" description={isError.description} />
      ) : null}
      <WebView
        ref={webRef}
        javaScriptEnabled
        domStorageEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        originWhitelist={['*']}
        source={{ uri }}
        onLoadProgress={onLoadProgress}
        onError={onError}
        injectedJavaScript={injectedJavaScript}
        onMessage={e => onMiddleInteraction(e, newMessage)}
      />
    </ScrollView>
  );
};

export default WebPage;
