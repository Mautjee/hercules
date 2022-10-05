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
