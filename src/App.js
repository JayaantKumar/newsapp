import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {

  state = {progress: 0}

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/bussiness"
              element={
                <News setProgress={this.setProgress}
                  key="bussiness"
                  pageSize={5}
                  country="in"
                  category="bussiness"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress}
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="gentertainmenteneral"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress}
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress}
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress}
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
