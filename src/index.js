import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MyApplication />
  </React.StrictMode>,
  document.getElementById("root")
);

function MyApplication() {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    async function ngambilDataPakeRestApi() {
      // promise => janji (tidak bisa ditunaikan sekarang)
      // result:
      // A. janji ditepati (resolved dengan baik, resolved dengan tidak baik)
      // B. janji tidak ditepati (rejected)
      // lakukan sesuatu jika resolved dengan tidak baik.
      // lakukan sesuatu jika resolved dengan baik.
      try {
        const respon = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50",
          {
            method: "GET",
          }
        );
        if (!respon.ok) {
          throw "Ada error gan";
        } else {
          const myData = await respon.json();
          setMyData(myData);
        }
      } catch (error) {
        console.log(error);
      }
    }
    ngambilDataPakeRestApi();
  }, []);

  if (myData === null) {
    return <div>Masih mengambil data...</div>;
  } else {
    return <div>{JSON.stringify(myData)}</div>;
  }
}
