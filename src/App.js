import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import "./App.css";
import AppLayout from "./app/components/layout/AppLayout";
import Header from "./app/components/layout/Header";

const App = () => (
  <AppLayout>
    <Header />
    <h1>Hello World</h1>
  </AppLayout>
);

export default App;
