import React, { useEffect } from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <SearchBar />
      <div className='container'>
        <AddButton />
        <AddLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  )
}

export default App
