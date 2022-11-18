import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import { store } from './data/store'
import { enableMapSet } from 'immer'

enableMapSet()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactQueryProvider>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
