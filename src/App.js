import React, { useState } from 'react'
import Navbar from "./Components/Navbar"
import './App.css';
import News from './Components/News';
 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  const pageSize = 5;
  const apikey = process.env.REACT_APP_API_KEY
  const [progress,setprogress] = useState(10);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path="/general" element={<News setprogress={setprogress} apikey={apikey} key = "general"pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route exact path="/business" element={<News setprogress={setprogress} apikey={apikey} key = "business"pageSize={pageSize} country={"in"} category={"business"} />} />
          <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key = "entertainment"pageSize={pageSize} country={"in"} category={"entertainment"} />} />
          <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key = "health"pageSize={pageSize} country={"in"} category={"health"} />} />
          <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key = "science"pageSize={pageSize} country={"in"} category={"science"} />} />
          <Route exact path="/sports"  element={<News setprogress={setprogress} apikey={apikey} key = "sports"pageSize={pageSize} country={"in"} category={"sports"} />} />
          <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key = "technology"pageSize={pageSize} country={"in"} category={"technology"} />} />
          <Route exact path="/" element={<News setprogress={setprogress} apikey={apikey} key = "general"pageSize={pageSize} country={"in"} category={"general"} />} />
        </Routes>
        </Router>
    </div>
  )
}
