import React from "react";
import Header from "./componentss/Header";
import Entry from "./componentss/entry";
import Learningprops from "./componentss/Learningprops";
import PropsExample from "./componentss/propsExample";
import ExampleProps2 from "./componentss/ExampleProps2";

export default function App() {
  return (
    <>
      <Header />
      <Entry />
      <Learningprops />
      {/* The parent component i.e app.jsx that renders multiple Contact components, each passing different data (name, phone, and email). */}
      <p className="text-2xl container py-8">simple props using with dot refernce operator </p>
      <PropsExample name="John Doe" phone="(123) 456-7890" />
      <PropsExample name="carl marx" phone="(123) 456-3214" />

      <ExampleProps2
        name="Gaurav raj"
        phone="134414e14331"
        email="outlook.com"
      />
    </>
  );
}
