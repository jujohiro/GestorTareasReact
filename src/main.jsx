import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { TaskProvider } from './components/Context/Context.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(<TaskProvider><App /></TaskProvider>)

