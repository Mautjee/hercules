import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';



const queryClient = new QueryClient();

ReactDOM.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.Fragment>,
  document.getElementById('root'),
);
