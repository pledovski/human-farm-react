import React from "react";
import "./App.css";
import AppLayout from "./app/components/layout/AppLayout";
import Header from "./app/components/layout/Header";
import Showcase from "./app/components/layout/Showcase";
import WhatDoWeOffer from "./app/components/layout/WhatDoWeOffer";
import Benefits from "./app/components/layout/Benefits";

const App = () => (
  <AppLayout>
    <Header />
    <Showcase />
    <WhatDoWeOffer />
    <Benefits />
  </AppLayout>
);

export default App;
