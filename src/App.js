import React, { useEffect } from 'react';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import SearchBar from './components/layout/SearchBar'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
