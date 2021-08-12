import React from "react";

export default function Card({ myCardData }) {
  // console.log(myCardData);
  const { pricingData } = myCardData;
  console.log(pricingData);

  return (
    <>
      {pricingData.map((data, i) => {
        return (
          <div key={i}>
            <h1>{data.title}</h1>
            <span>
              {data.amount}
              {data.premonth}
            </span>
            {data.features.map((data1, i) => {
              if (data1.access === true) {
                return <li key={i}>?{data1.name}</li>;
              } else {
                return <li key={i}>X{data1.name}</li>;
              }
            })}
          </div>
        );
      })}
    </>
  );
}
