import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


import { Dashboard } from './view';
import { QueryClientProvider } from 'react-query';
import { CssBaseline } from '@mui/material';
import { queryClient } from './service/api';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Dashboard />
    </QueryClientProvider>



  );
}
