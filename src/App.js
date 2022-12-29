import "./App.css";
import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";
import NewsItem from "./NewsItem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  apikey = "12d700233dmsh11673fe03dbea85p134ce3jsn4fd36bdce0b9";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  apikey={this.apikey}
                  pagesize={20}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
