import React, { useEffect } from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <>
      <SearchBar />
      <div className='container'>
        <AddButton />
        <AddLogModal />
        <Logs />
      </div>
    </>
  )
}

export default App
