import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TransactionContextProvider, { TransactionContext } from './contexts/TransactionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TransactionContextProvider>
        <App />
    </TransactionContextProvider>
  //</React.StrictMode>,
)
