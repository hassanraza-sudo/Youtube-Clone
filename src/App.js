import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="app-page">
                  <Sidebar />
                  <RecommendedVideos />
                </div>
              </>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app-page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
