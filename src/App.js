import React, { useEffect } from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </>
  )
}

export default App;
