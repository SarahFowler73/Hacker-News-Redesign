import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirect to latest news page on load, since the app will not have a separate home page */}
        <Route path="/" element={<Navigate replace to={'articles/latest'} />} />
        <Route path="articles">
          <Route path={'latest'} element={<div>latest</div>} />
          <Route path={'starred'} element={<div>starred</div>} />
          <Route
            path={'detail/:articleId'}
            element={<div>detail somehow</div>}
          />
        </Route>

        <Route path="*" element={<div>wuh oh</div>} />
      </Routes>
    </div>
  )
}

export default App
