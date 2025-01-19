import 'core-js/actual/structured-clone';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WindowWidthProvider } from './state/WindowWidthContext.tsx';
import App from './App.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WindowWidthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WindowWidthProvider>
  </StrictMode>,
)
