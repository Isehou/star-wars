import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage/HomePage";
import PeoplePage from "./containers/PeoplePage";
import PersonPage from "./containers/PersonPage/PersonPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import "./App.css";

function App() {
  const routeLinks = [
    { label: "Home", link: "/home" },
    { label: "People", link: "/people/?page=1" },
    { label: "Search", link: "/search" },
  ];

  return (
    <div className="App">
      <Header routeLinks={routeLinks}></Header>
      <div className="wrapper">
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/people" element={<PeoplePage />}></Route>
          <Route path="/people/:id" element={<PersonPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
