import React from "react";
import { data } from "./data";
import Card from "./Card";

export default function App() {
  // console.log(data);

  return (
    <>
      <Card myCardData={data} />
    </>
  );
}
