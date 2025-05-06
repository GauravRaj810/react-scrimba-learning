import React from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/Footer";



function App() {
  return (
    // using fragment tag or <> , </> i.e same
    <Fragment>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container flex-grow">
          <MainComponent />
        </div>
        <FooterComponent />
      </div>
    </Fragment>
    
  
  );
}

export default App;
