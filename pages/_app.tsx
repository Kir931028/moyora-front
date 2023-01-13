import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import localFont from '@next/font/local';
import { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const pretendard = localFont({
  src: '../public/font/PretendardVariable.ttf',
});

const antdTheme = {
  token: {
    colorPrimary: '#FF6D3A',
    colorError: '#D82C0D',
    colorSuccess: '#2C6ECB',
    fontFamily: `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif`,
    fontSize: 16,
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>moyora - 우리학교 다시 모여라!</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimal-scale=1"
          />
        </Head>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
          integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
          crossOrigin="anonymous"
        />
        <AppLayout>
          <main className={pretendard.className}>
            <Component {...pageProps} />
          </main>
        </AppLayout>
      </ThemeProvider>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;
