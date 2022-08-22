import "./App.css";
import { Container } from "@material-ui/core";

import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate replace to={"/posts"} />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route
            exact
            path="/auth"
            element={!user ? <Auth /> : <Navigate replace to={"/posts"} />}
          />
          {/* {admin && <Route path="*" element={<MainLayoutRoute />} />} */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
