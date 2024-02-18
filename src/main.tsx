import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/style.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();


/*import React, { Suspense } from 'react'; 
    const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        suspense:true
      }
    }
  })  
  //when we want to use suspense for loading...
  <Suspense fallback={<h2>Loading...</h2>}></Suspense>
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
