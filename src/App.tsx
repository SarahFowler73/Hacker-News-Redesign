import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Latest } from './pages/articles/Latest'
import { Starred } from './pages/articles/Starred'
import { Layout } from './pages/common/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirect to latest news page on load, since the app will not have a separate home page */}
        <Route path="/" element={<Navigate replace to={'articles/latest'} />} />
        <Route path="articles" element={<Layout />}>
          <Route path={'latest'} element={<Latest />} />
          <Route path={'starred'} element={<Starred />} />
          {/* <Route
            path={'detail/:articleId'}
            element={<div>detail somehow</div>}
          /> */}
        </Route>

        <Route path="*" element={<div>wuh oh</div>} />
      </Routes>
    </div>
  )
}

export default App
