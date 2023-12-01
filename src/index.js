import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'
import { QueryClient, QueryClientProvider } from 'react-query';
const root = ReactDOM.createRoot(document.getElementById('root'));
 
let queryClient = new QueryClient()
root.render(
   <QueryClientProvider client={queryClient} >
       <App />
   </QueryClientProvider>
);
