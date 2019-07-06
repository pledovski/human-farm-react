import React from "react";
import "./App.css";
import AppLayout from "./app/components/layout/AppLayout";
import Header from "./app/components/layout/Header";
import Showcase from './app/components/layout/Showcase'

const App = () => (
  <AppLayout>
    <Header />
    <Showcase />
  </AppLayout>
);

export default App;
