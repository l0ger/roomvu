import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { PostService } from '../services/postService';

function RoomvuApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  PostService.posts().then(res => {
    console.log(res);
  });
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}

export default RoomvuApp;
